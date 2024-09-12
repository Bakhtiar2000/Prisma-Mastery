import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleDelete = await prisma.post.delete({
  //     // Must use a unique or primary key field inside where
  //     where: {
  //       id: 2,
  //     },
  //   });

  const deleteMany = await prisma.post.deleteMany({
    where: {
      published: true,
    },
  });

  console.log(deleteMany);
};

updates();
