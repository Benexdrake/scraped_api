import type { NextApiRequest, NextApiResponse } from "next";
import {exams, exam_infos  } from "@/lib/exams";


export default function handler(req: NextApiRequest, res: NextApiResponse)
{
  let id = req.query.id

  if(!id)
  {
    res.status(200).json(exam_infos(req))
    return;
  }

  let exam = exams.find(x => x.id === id)
  res.status(200).json(exam)
}
