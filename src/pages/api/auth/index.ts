import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";


async function loginAuth(req:NextApiRequest,res: NextApiResponse) {
    if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("lexo");

    const user = await db
      .collection("user")
      .find({}).limit(1)
            .toArray();
        
    res.status(200).send(user);
  }0
}


export default loginAuth