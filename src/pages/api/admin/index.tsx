/** @format */


import clientPromise from "../../../lib/mongodb";

import {NextApiRequest, NextApiResponse} from "next";

async function Admin(req: NextApiRequest, res: NextApiResponse) {
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
  } else if (req.method === "POST") {
  console.log("body");

    const {email, password} = req.body;
    try {
      // chek if user exist
      const client = await clientPromise;
      const db = client.db("lexo");

      const user = await db
        .collection("user")
        .find({email: email, password: password})
        .sort({metacritic: -1})
        .limit(1)
        .toArray();
      console.log(user.length > 0 ? "yes" : "no");
      if (user.length === 1) {
        res.json({user, status: true});
      } else {
        res.json({msg: "user does not exist", status: false});
      }
    } catch (error) {
      res.send({
        msg: `unauthorized  ${error}`,
        status: false,
      });
    }
  }
}


export default Admin;