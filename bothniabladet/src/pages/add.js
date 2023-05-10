import connectMongo from '../utils/connectMongo'
import {connect} from "mongoose";
import Test from '../models/tipModel'
import Tip from "@/models/tipModel";

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function addTest(req,res){
    const testDoc = new Test({
        description: req.body.descrTip,
        keyword: req.body.keywordTip,
        email: req.body.emailTip,
        firstname: req.body.firstnameTip,
        lastname: req.body.lastnameTip
    })

    // const {descrTip, keywordTip, emailTip, firstnameTip, lastnameTip} = req.body;
    console.log('connecting to mongo');
    await connectMongo();
    console.log('connected to mongo');

    console.log('creating document');
   const test = await Test.create(testDoc);
    console.log('created document');

    res.json({test})
}