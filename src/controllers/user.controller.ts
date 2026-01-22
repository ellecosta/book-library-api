import {Request, Response, NextFunction} from "express";
import { UserService} from "../services/user.service";
import { PrismaUserRepository } from "../repositories/user.repository";
import { 
    CreateUserSchema,
    UpdateUserSchema,
    IdParamSchema
 } from "../schemas/user.schema";

const userService = new UserService(PrismaUserRepository);

export class UserController {
    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const data = CreateUserSchema.parse(req.body);
            const user = await userService.create(data);
            return res.status(200).json(user);
        } catch (err) {
            next(err);
        }
    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = IdParamSchema.parse(req.params);
            const user = await userService.findById(id);
            return res.status(200).json(user);
        } catch (err) {
            next(err);
        } 
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = IdParamSchema.parse(req.params);
            const data = UpdateUserSchema.parse(req.body);
            const user = await userService.update(id, data);
            return res.status(200).json(user);
        } catch (err) {
            next(err);
        } 
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = IdParamSchema.parse(req.params);
            await userService.delete(id);
            return res.status(204).send();
        } catch (err) {
            next(err);
        } 
    }
}