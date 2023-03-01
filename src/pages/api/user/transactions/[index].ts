import clientPromise from "../../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {index:id} = req.query
    console.log('id',id)
   try {
       const client = await clientPromise;
       const db = client.db("lexo");

       const transactions = await db
           .collection("transaction")
           .find({unique_id :id})
           .toArray();
       res.json(transactions[0]);
   } catch (e) {
       console.error(e);
   }
};