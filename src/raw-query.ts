import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  //   const posts = await prisma.$queryRaw`SELECT * FROM "posts"`;

  await prisma.$queryRaw`TRUNCATE TABLE "users" CASCADE`; // Deletes every data of users table and also other table's data that was related to (one to one | one to many | etc) users table's data
};

rawQuery();
