import type { User as PrismaUser} from "@prisma/client";
import { UserType } from "../types/user.types"

export class UserMapper {
    static mapSchemaToEntity(data: PrismaUser): UserType {
        return {
            id: data.id,
            name: data.name,
            email: data.email, 
            role: data.role,
        }
    }
}

