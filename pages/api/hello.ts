import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export const Hello = (
  _req: NextApiRequest,
  res: NextApiResponse<Data>
): void => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
