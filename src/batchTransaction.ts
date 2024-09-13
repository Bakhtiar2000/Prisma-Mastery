import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Transaction 1
  const createUser = prisma.user.create({
    data: {
      username: "bakhtiarFahim",
      email: "bakhtiarfahim360@gmail.com",
    },
  });

  // Transaction 2
  const updateUser = prisma.user.update({
    where: {
      id: 8,
    },
    data: {
      age: 30,
    },
  });

  // performing batch transaction
  const [userData, updatedData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
};

main();
