import * as cheerio from "cheerio";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.query);
  const data = await fetch(
    "https://fabelio.com/ip/meja-makan-xavier-wooden-top-square"
  ).then((raw) => raw.json());
  const $ = cheerio.load(data);
  const d = $(".text-16.font-600").text();
  res.status(200).json({ price: d });
}
