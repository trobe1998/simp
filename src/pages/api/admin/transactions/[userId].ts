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
        const { userId }:Partial<{ [key: string]: string | string[]; }> = req.query
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
    else if (req.method === 'PUT') {
        const { userId } = req.query
        const id:string = userId?.split('|')[0]
        const rowNum:string = userId?.split('|')[1]
             const client = await clientPromise;
       const db = client.db("lexo");
          const transactions = await db
           .collection("transaction")
           .find({unique_id: id })
           .sort({ metacritic: -1 })
           .toArray();
        let trn = transactions[0].userTransactions
         trn.splice(Number(rowNum),1)
        // const tranUpdated = transactions[0].userTransactions

           const update = await db.collection("transaction")
                .updateOne({ unique_id: id }, {
                    $set:{userTransactions: trn} })
        
      res.send( trn)

    }
};


