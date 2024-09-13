import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event", // Prisma performs event listening
      level: "query",
    },
  ],
});
prisma.$on("query", (e) => {
  console.log("Query: ", e.query);
  console.log("Duration: ", e.duration);
  console.log("Timestamp: ", e.timestamp);
});

const logging = async () => {
  const getAllFromDb = await prisma.user.findMany({});

  console.log(getAllFromDb);
};

logging();
