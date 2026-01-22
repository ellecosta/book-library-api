import type { Book as PrismaBook} from '../generated/prisma/client'
import { BookType } from "../types/book.types"

export class BookMapper {
    static mapSchemaToEntity(data: PrismaBook): BookType {
        return data;
    }
}