import { prisma } from "../database/prismaClient";
import type { CreateUserDTO } from "../schemas/user.schema";
import { UserMapper, UserType, UserCredentialsType } from "../entities/mappers/user"; 

// Create new user
export async function createUser(data: CreateUserDTO): Promise<UserType> {
  const user = await prisma.user.create({
    data,
  });
  return UserMapper.mapSchemaToEntity(user);
}

// Read user
export async function getUserById(id: string): Promise<UserType | null> {
  const user = await prisma.user.findUnique({
    where: { id},
  });
  if (!user) {
    return null;
  }
  return UserMapper.mapSchemaToEntity(user);
}

// Update user by ID
export async function updateUser(id: string, data: Partial<CreateUserDTO>): Promise<UserType | null> {
  const user = await prisma.user.update({
    where: { id },
    data
  });
  return UserMapper.mapSchemaToEntity(user);
}

// Delete user by ID
export async function deleteUser(id: string): Promise<boolean> {
  const deleted = await prisma.user.delete({
    where: { id },
  });
  return !!deleted;
}









