// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import json from '@/public/scraped/Animes.json'


export default function handler(req: NextApiRequest, res: NextApiResponse)
{
  if(req.query.info)
  {
    // Tags Info
    let tagCounts = new Map<string, number>();
    // Publisher Info
    let publisherCounts = new Map<string,number>();

    json.forEach(item => {
      item.tags.forEach(tag => {
        let t = tag.trim().toLowerCase().split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        if(tag !== '')
          tagCounts.set(t, (tagCounts.get(t) || 0) + 1);
      });
    });
    json.forEach(x => {
      publisherCounts.set(x.publisher, (tagCounts.get(x.publisher) || 0) + 1);
    })

    let tags:any = []
    let publishers:string[] = []
    tagCounts.forEach((count,tag) => {
      tags.push({tag,count})
    }) 

    publisherCounts.forEach((i,publisher) => {
      publishers.push(publisher)
    })
    
    res.status(200).json({publishers,tags})
  }

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
