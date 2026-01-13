import type { CreateUserDTO } from "../schemas/user.schema";
import type { UserType } from "../types/user.types";

export interface UserRepository {
  createUser(data: CreateUserDTO): Promise<UserType>;
  getUserById(id: string): Promise<UserType | null>;
  updateUser(id: string, data: Partial<CreateUserDTO>): Promise<UserType | null>;
  deleteUser(id: string): Promise<boolean>;
}
