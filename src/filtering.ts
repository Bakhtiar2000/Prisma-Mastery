import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  //   const andFiltering = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains: "title", // Searches if the title has 'title' word in it or not
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  //   const orFiltering = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             endsWith: "title", // Searches if the title starts with 'title' word or not
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });

  //   const notFiltering = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           title: {
  //             startsWith: "Tis", // Searches if the title starts with 'Tis' word or not
  //           },
  //         },
  //         {
  //           content: {
  //             equals: "This is 2nd content", // Searches if the title = 'This is 2nd content'
  //           },
  //         },
  //       ],
  //     },
  //   });

  //   const userNameArray = ["user3", "user2", "user1"];
  //   const userNamesByArray = await prisma.user.findMany({
  //     where: {
  //       username: {
  //         in: userNameArray, // Loops through an array
  //       },
  //     },
  //   });

  const inDepthRelationData = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      // Shows the related post data in User model
      Post: {
        include: {
          // Shows the related postCategory data in Post model
          PostCategory: {
            include: {
              // Shows the related category data in PostCategory model
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthRelationData, { depth: Infinity });
};

filtering();
