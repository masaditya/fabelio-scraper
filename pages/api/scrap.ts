import type { NextApiRequest, NextApiResponse } from "next";
import * as cheerio from "cheerio";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // @ts-ignore
  const raw = await fetch(req.query.url);
  const data = await raw.text();
  const $ = cheerio.load(data);
  const price = $(".text-16.font-600").text();
  const description = $(".text-16").map((i, el) => {
    return el.children[0].data;
  });
  let a = description.splice(description.length - 3, 3);
  // console.log(a);
  const image = $("[height=640]").attr("src");
  console.log(image);
  res
    .status(200)
    .json({ price, description: a.join(" "), image, url: req.query.url });
}
