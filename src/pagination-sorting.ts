import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // Offset pagination
  const offsetData = await prisma.post.findMany({
    skip: 5,
    take: 2,
  });

  // Cursor pagination
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 15,
    },
  });

  // Sorting
  const sortData = await prisma.post.findMany({
    orderBy: {
      id: "asc",
    },
  });
};

paginationSorting();
