import { NextApiRequest, NextApiResponse } from "next";

export const Hello = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
