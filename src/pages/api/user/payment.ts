
import clientPromise from "../../../lib/mongodb";

import {NextApiRequest, NextApiResponse} from "next";

async function Admin(req: NextApiRequest, res: NextApiResponse) {
  // console.log('req', req);
  if (req.method === "GET") {
  
    res.status(200).send('ok');
  } else if (req.method === "POST") {

      const data = req.body;
      console.log(data)

    try {
      // chek if user exist
      const client = await clientPromise;
      const db = client.db("lexo");

      const user = await db
        .collection("payment")
        .insertOne({data})
res.send('inserted')
    
    } catch (error) {
      res.send({
        msg: `unauthorized  ${error}`,
        status: false,
      });
    }
  }
}


export default Admin;