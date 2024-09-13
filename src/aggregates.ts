import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // Find average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // Find sum of age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  // Find count of age
  const countAge = await prisma.user.aggregate({
    _count: {
      username: true, // Only count function among aggregate functions can calculate fields not having integer type
    },
  });

  // Find total number of records
  const countData = await prisma.user.count();

  // Find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  console.log({ avgAge, sumAge, countAge, countData, maxAge });
};

aggregates();
