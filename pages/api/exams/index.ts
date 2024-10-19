// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cfs_c02 from '@/public/exam/aws-cfs-c02.json'


export default function handler(req: NextApiRequest, res: NextApiResponse)
{
  res.status(200).json(cfs_c02)
}
