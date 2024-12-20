// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import json from '@/public/scraped/Handys.json'


export default function handler(req: NextApiRequest, res: NextApiResponse) 
{
  if(req.query.all)
  {
    res.status(200).json(json.sort(() => .5 - Math.random()));
    return
  }

  res.status(200).json(json.sort(() => .5 - Math.random()).slice(0,50));
}
