import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  const singleUpdate = await prisma.post.update({
    where: {
      id: 4,
    },
    data: {
      title: "4th Title",
      content: "4th Content",
    },
  });

  const updateMany = await prisma.post.updateMany({
    where: {
      authorName: "Fahim",
    },
    data: {
      published: true,
    },
  });

  //   console.log(singleUpdate);
};

updates();
