import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const result = await prisma.post.create({
    // Object below must be named data
    data: {
      title: "Here is my 2nd Title",
      content: "Here is my 2nd Content",
      authorName: "Fahim",
    },
  });
  console.log(result);
};

main();
