import { Prisma, PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user2",
  //     email: "user2@gmail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio...",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software Engineering",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "Tis is 4th title",
      content: "This is 4th content",
      authorId: 1,

      // Connecting with postCategory table
      PostCategory: {
        // create: {
        //   categoryId: 3,

        //   // category: {
        //   //   connect: {
        //   //     id: 1,
        //   //   },
        //   // },
        // },

        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 4,
          },
        ],
      },
    },
    include: {
      PostCategory: true,
    },
  });

  // const createMany = await prisma.user.createMany({
  //   data: [
  //     {
  //       title: "Here is my 3rd Title",
  //       content: "Here is my 3rd Content",
  //       authorName: "Salman",
  //     },
  //     {
  //       title: "Here is my 4th Title",
  //       content: "Here is my 4th Content",
  //       authorName: "Jabir",
  //     },
  //     {
  //       title: "Here is my 5th Title",
  //       content: "Here is my 5th Content",
  //       authorName: "Nadim",
  //     },
  //   ],
  // });
  console.log(createPost);
};

main();
