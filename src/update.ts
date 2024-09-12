import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 4,
  //     },
  //     data: {
  //       title: "4th Title",
  //       content: "4th Content",
  //     },
  //   });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       authorName: "Fahim",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  const upsert = await prisma.post.upsert({
    where: {
      id: 1,
    },
    update: {
      title: "Updated title",
    },
    create: {
      title: "Inserted title",
      content: "New Content",
    },
  });

  console.log(upsert);
};

updates();
