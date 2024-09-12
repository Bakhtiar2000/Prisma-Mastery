import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const getAllFromDb = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirst({
    where: {
      id: 1,
    },
  });

  //   const findFirstOrThrow = await prisma.post.findFirstOrThrow({
  //     where: {
  //       published: true,
  //     },
  //   });

  const findUnique = await prisma.post.findUnique({
    // Takes only unique fields inside where (id, phone etc.)
    where: {
      id: 2,
    },
  });

  //   const findUniqueOrThrow = await prisma.post.findUniqueOrThrow({
  //     // Takes only unique fields inside where (id, phone etc.)
  //     where: {
  //       id: 3,
  //     },
  //   });

  //   console.log({ findUnique });
};

main();
