import type { User } from "@prisma/client";

export type UserType = Omit<User, "password">;
export type UserCredentialsType = Pick<User, "id" | "email" | "password">;

export class UserMapper {
    static mapSchemaToEntity(data: User): UserType {
        const { password, ...rest } = data;
        return rest;
    }

    static mapUserCredentialsToEntity(data: User): UserCredentialsType {
        return {
            id: data.id,
            email: data.email,
            password: data.password,
        };
    }
}

