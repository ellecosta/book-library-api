import { prisma } from "./src/database/prismaClient";

async function main() {
  await prisma.$connect();
  console.log("Prisma conectado com sucesso");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
