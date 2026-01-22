import { BookRepository } from "../repositories/book.repository.interface";
import type { CreateBookDTO } from "../schemas/book.schema";

export class BookService {
    constructor(
        private readonly bookRepository: BookRepository
    ) {}

    async create(data: CreateBookDTO) {
        return this.bookRepository.createBook(data);
    }   

    async findAll() {
        return this.bookRepository.getBooks();
    }  
    
    async checkAvailability(id: string) {
        return this.bookRepository.getBookAvailability(id);
    }   

    async update(id: string, data: Partial<CreateBookDTO>) {
        return this.bookRepository.updateBook(id, data)
    }   

    async delete(id: string) {
        await this.bookRepository.deleteBook(id);
    }   
}