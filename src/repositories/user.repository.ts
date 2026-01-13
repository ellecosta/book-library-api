import { prisma } from "../database/prismaClient";
import { UserMapper} from "../mappers/user.mapper"; 
import { UserRepository } from "./user.repository.interface";

export const PrismaUserRepository: UserRepository = {
  async createUser(data) {
    const user = await prisma.user.create({
      data,
    });
    return UserMapper.mapSchemaToEntity(user);
  },

  async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: { id},
    });
    return user ? UserMapper.mapSchemaToEntity(user) : null;
  },

  async updateUser(id, data) {
    const user = await prisma.user.update({
      where: { id },
      data
    });
    return UserMapper.mapSchemaToEntity(user);
  },

  async deleteUser(id) {
    await prisma.user.delete({
      where: { id },
    });
    return true;
  }

}










