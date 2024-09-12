import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    data: {
      title: "Here is my 2nd Title",
      content: "Here is my 2nd Content",
      authorName: "Fahim",
    },
  });
  console.log(result);
};

main();
