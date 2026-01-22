import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/access-control.middleware";
//import { adminOnly, authenticated } from "../middlewares/role.middleware";

const router = Router();

router.post(
    "/user", 
    authMiddleware,
    authorize("create", "user", "any"), 
    UserController.create
);

router.put(
    "/user/:id", 
    authMiddleware,
    authorize("update", "user", "own"),
    UserController.update
);

router.delete(
    "/user/:id",
    authMiddleware,
    authorize("delete", "user", "own"),
    UserController.delete
);

router.get(
    "/user/:id",
    authMiddleware,
    authorize("read", "user", "own"),
    UserController.getById
);

export default router;
