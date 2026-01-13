import { UserRepository } from "../repositories/user.repository.interface";
import type { CreateUserDTO } from "../schemas/user.schema";

export class UserService {
    constructor(
        private readonly userRepository: UserRepository
    ) {}

    async create(data: CreateUserDTO) {
        return this.userRepository.createUser(data);
    }

    async findById(id: string) {
        return this.userRepository.getUserById(id);
    }

    async update(id: string, data: Partial<CreateUserDTO>) {
        return this.userRepository.updateUser(id, data)
    }

    async delete(id: string) {
        await this.userRepository.deleteUser(id);
    }
}
