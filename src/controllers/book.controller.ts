import { Request, Response, NextFunction } from 'express';
import { BookService } from '../services/book.service';
import { PrismaBookRepository } from '../repositories/book.repository';
import {
    CreateBookSchema,
    UpdateBookSchema,
    IdParamSchema
} from '../schemas/book.schema';

