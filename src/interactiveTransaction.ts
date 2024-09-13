import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  // performing interactive transaction
  const interactiveTransactionResult = await prisma.$transaction(
    async (transactionClient) => {
      // Transaction 1
      const getAllPost = await transactionClient.post.findMany({
        where: {
          published: true,
        },
      });

      //Transaction 2
      const countUser = await transactionClient.user.count();

      // Transaction 3
      const updateUser = await transactionClient.user.update({
        where: {
          id: 3,
        },
        data: {
          age: 15,
        },
      });

      return {
        getAllPost,
        countUser,
        updateUser,
      };
    }
  );

  console.log(interactiveTransactionResult);
};

interactiveTransaction();
