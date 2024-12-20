// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import json from '@/public/scraped/Pokemon.json'


export default function handler(req: NextApiRequest, res: NextApiResponse)
{
  let nr = req.query.nr as unknown as number;
  let name = req.query.name as unknown as string;
  let all = req.query.all as unknown as boolean;

  let pokes = json.filter(x => x.nr == nr)
  if(pokes.length > 0)
  {
    res.status(200).json(pokes);
    return;
  }

  if(name !== null)
  {
    let pokes = json.filter(x => x.name.toLowerCase().includes(x.name.toLowerCase()))
    if(pokes.length > 0)
    {
      res.status(200).json(pokes)
      return;
    }
  }
  
  if(all)
  {
    res.status(200).json(json.sort(() => .5 - Math.random()));
    return
  }
  
    res.status(200).json(json.sort(() => .5 - Math.random()).slice(0,50));
}
