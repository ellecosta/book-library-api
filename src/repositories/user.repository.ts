import { prisma } from "../database/prismaClient";
import type { CreateUserDTO } from "../schemas/user.schema";

export async function createUser(data: CreateUserDTO) {
  return await prisma.user.create({
    data: {
      name: data.name, 
      email: data.email, 
      password: data.password,
      role: data.role,
    },
    select: { id: true, name: true, email: true, role: true },
  });
}
