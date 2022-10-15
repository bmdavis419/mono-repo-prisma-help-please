import { prisma } from "database";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name } = req.body;
    const nDemo = await prisma.demo.create({
      data: {
        name,
      },
    });
    return res.status(200).json(nDemo);
  } else {
    const data = await prisma.demo.findMany();
    res.status(200).json(data);
  }
};

export default handler;
