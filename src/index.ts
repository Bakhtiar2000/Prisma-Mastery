import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const x = await prisma.user.findFirst;
  console.log("Hello Wold");
};

main();
