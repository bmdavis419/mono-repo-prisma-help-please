import { prisma } from "database";

export const add_demo = async (name: string) => {
  const nDemo = await prisma.demo.create({
    data: {
      name,
    },
  });
  console.log("added", nDemo);
};

export const get_demo = async () => {
  const data = await prisma.demo.findMany();
  return data;
};
