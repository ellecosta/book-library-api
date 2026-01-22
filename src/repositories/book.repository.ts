import { prisma } from "../database/prismaClient";
import { BookMapper } from "../mappers/book.mapper";
import { BookRepository } from "./book.repository.interface";

export const PrismaBookRepository: BookRepository = {  
    async createBook(data) {
        const book = await prisma.book.create({
            data,
        });
        return BookMapper.mapSchemaToEntity(book);
    },

    async getBooks() {
        const books = await prisma.book.findMany();
        return books.map(BookMapper.mapSchemaToEntity);
    },

    async getBookAvailability(id) {
        const book =  await prisma.book.findUnique({
            where: { id },
        });
        return book?.available ?? null;
    },

    async updateBook(id, data) {
        const book = await prisma.book.update({
            where: { id },
            data
        });
        return BookMapper.mapSchemaToEntity(book);
    },

    async deleteBook(id) {
        await prisma.book.delete({
            where: { id },
        });
        return true;
    }
}