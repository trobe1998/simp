/** @format */


import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";

import {NextApiRequest, NextApiResponse} from "next";

async function manipulateUser(req: NextApiRequest, res: NextApiResponse) {
  // console.log('req', req);
  if (req.method === "GET") {
    const client = await clientPromise;
    const db = client.db("lexo");

    const user = await db
      .collection("user")
      .find({})
      .toArray();
    // console.log('user', user)
    res.status(200).send(user);
  }
  else if (req.method === "POST") {

    // const {username, email, password, status} = req.body;
      const data = req.body;
      console.log(data)
    try {
      // chek if user exist
      const client = await clientPromise;
      const db = client.db("lexo");

      const user = await db
        .collection("user")
            .insertOne(data)
        res.status(200).send({msg:'success'})
     
    } catch (error) {
      res.send({
        msg: `unauthorized  ${error}`,
        status: false,
      });
    }
    }
  else if (req.method === 'DELETE') {
    const id: any = req.query.adminUser
    console.log('id', id)
    const client = await clientPromise;
      const db = client.db("lexo");
       const user = await db
      .collection("user")
      .deleteOne({_id:  new ObjectId(id)})
    console.log('user', user)
    res.status(200).send(user);

  }
   else if (req.method === 'PUT') {
    const id: any = req.query.index
    const {
    fullName,
    email,
    password,
    status,
} = req.body
    console.log('id',id)
    const client = await clientPromise;
      const db = client.db("lexo");
       const user = await db
      .collection("user")
         .updateOne({ _id: new ObjectId(id) }, {
           $set: 
           {
    fullName,
    email,
    password,
    status,
} 
      })
    console.log('user', user)
    res.status(200).send(user);

    }
}


export default manipulateUser;