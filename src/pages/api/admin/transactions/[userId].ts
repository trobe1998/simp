import clientPromise from "../../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { userId } = req.query
    console.log(userId)
   try {
       const client = await clientPromise;
       const db = client.db("lexo");

       const transactions = await db
           .collection("transaction")
           .find({unique_id: userId })
           .sort({ metacritic: -1 })
           .toArray();
       console.log(transactions)
       res.status(200).send(transactions);
   } catch (e) {
       console.error(e);
   }
}
    else if (req.method === 'POST') {
        const { userId }:any = req.query
   console.log(userId)
   try {
       const client = await clientPromise;
       const db = client.db("lexo");

       const transactions = await db
           .collection("transaction")
           .find({unique_id: userId })
           .sort({ metacritic: -1 })
           .toArray();
       if (transactions.length !== 0) {
     
            transactions.map(transaction => {
               if (transaction.unique_id === userId){
                   let some = [...transaction.userTransactions, req.body]
                 console.log(some)
                   db.collection('transaction').updateOne({ unique_id: userId }, { $set: { userTransactions: some } })
                   res.send({msg: 'inserted'})
                   
           } })
         

       }
       else {           
       db.collection('transaction').insertOne({
                   unique_id: userId,
                   userTransactions: [req.body],
               })

           res.send({msg:'ok'})

       }

               
       
   } catch (e) {
       console.error(e);
   }
    
    }
    
};


