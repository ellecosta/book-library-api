import { Request, Response, NextFunction } from "express";
import { ac } from "../permissions/access-control";

type Action = "create" | "read" | "update" | "delete";
type Possession = "own" | "any";

export function authorize(
    action: Action, 
    resource: string, 
    possession: Possession
) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user;

        if (!user) {
            return res.status(401).json({ message: "Unauthorized"});
        }

        const permission = ac.can(user.role)
        [`${action}${possession === "own" ? "Own" : "Any"}`](resource);

        if (!permission.granted) {
            return res.status(403).json({ message: "Access denied"});
        }

        next();
        
    };
}