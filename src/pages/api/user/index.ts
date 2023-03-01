import React from 'react'
import clientPromise from "../../../lib/mongodb";

import { NextApiRequest, NextApiResponse } from "next";


async function User(req: NextApiRequest, res: NextApiResponse) {
    const index = req.query
    const email = 'edisonclaire91@gmail.com'
    if (req.method === 'GET') {
            const client = await clientPromise;
       const db = client.db("lexo");

       const user = await db
           .collection("user")
            .find({ email: email }).sort({ metacritic: -1 })
           .limit(1)
                .toArray();
        console.log(user)
            res.status(200).send(user[0])
    }
    
    else if (req.method === 'POST') {
        const { email, password } = req.body
        console.log(req.body)
        try {
            // chek if user exist 
             const client = await clientPromise;
       const db = client.db("lexo");

       const user = await db
           .collection("user")
           .findOne({email: email, password: password})
            console.log(user)
            if (user) {
                res.json({user, status: true});
                
            } else {
            res.json({msg: 'user does not exist', status : false});
                
            }
        } catch (error) {
            res.send({
                msg:`unauthorized  ${error}`,
                status: false
            })
        }
        
}}

export default User