// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import json from '@/public/scraped/Animes.json'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log(req.query)

  if(req.query.id != null)
  {
    for(let anime of json)
    {
      if(anime._id === req.query.id)
      {
        res.status(200).json(anime);
        break
      }
    }
  }

  if(req.query.title != null)
  {
    let title = `${req.query.title}`.toLowerCase()
    let animes = json.filter(x => x.title.toLowerCase().includes(title))
    res.status(200).json(animes);
    return
  }

  if(req.query.all)
  {
    res.status(200).json(json.sort(() => .5 - Math.random()));
    return
  }

  res.status(200).json(json.sort(() => .5 - Math.random()).slice(0,50));
}
