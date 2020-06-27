import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export const Hello = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });

  return res;
};
