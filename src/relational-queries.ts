import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQueries = async () => {
  //   const result = await prisma.user
  //     .findUnique({
  //       where: {
  //         id: 1,
  //       },
  //       //   include :{
  //       //     Post: true // Shows Post data along with use data
  //       //   }
  //     })
  //     .Post(); // this is called Fluent API (Finding out only post data by querying on user model)

  const publishedPostUses = await prisma.user.findMany({
    include: {
      Post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUses, { depth: Infinity });
};

relationalQueries();
