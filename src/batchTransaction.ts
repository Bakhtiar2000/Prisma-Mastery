import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "bakhtiarFahim",
      email: "bakhtiarfahim360@gmail.com",
    },
  });

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
