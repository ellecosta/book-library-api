import type { CreateBookDTO } from "../schemas/book.schema";
import type { BookType } from "../types/book.types";

export interface BookRepository {
  createBook(data: CreateBookDTO): Promise<BookType>;
  getBooks(): Promise<BookType[] | null>;
  getBookAvailability(id: string): Promise<boolean | null>;
  updateBook(id: string, data: Partial<CreateBookDTO>): Promise<BookType | null>;
  deleteBook(id: string): Promise<boolean>;
}
