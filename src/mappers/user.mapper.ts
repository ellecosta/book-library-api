import type { User as PrismaUser} from '../generated/prisma/client'
import { UserType, Role } from "../types/user.types"

export class UserMapper {
    static mapSchemaToEntity(data: PrismaUser): UserType {
        return {
            id: data.id,
            name: data.name,
            email: data.email, 
            role: data.role as Role,
        }
    }
}

