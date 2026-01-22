import { Request, Response, NextFunction } from "express";
import { Role } from "../types/user.types";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing"});
    }

    const [, role] = authHeader.split(" ");

    if (role !== "admin" && role !== "user") {
        return res.status(401).json({ message: "Invalid role" });
    }

    req.user = {
        role: role as Role,
    };

    next();
}