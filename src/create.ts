import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Here is my 3rd Title",
        content: "Here is my 3rd Content",
        authorName: "Salman",
      },
      {
        title: "Here is my 4th Title",
        content: "Here is my 4th Content",
        authorName: "Jabir",
      },
      {
        title: "Here is my 5th Title",
        content: "Here is my 5th Content",
        authorName: "Nadim",
      },
    ],
  });
  console.log(createMany);
};

main();
