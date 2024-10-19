// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {exam_infos} from "@/lib/exams";


export default function handler(req: NextApiRequest, res: NextApiResponse)
{
  res.status(200).json(exam_infos)
}
