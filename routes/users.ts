import express, { Router } from "express";
import { createUser, getAllUsers , getUser, deleteUser, updateUser, updateAllUser } from "../controllers/users";
const router: Router = express.Router();

router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/users/:id', updateUser);

router.put('/users/:id', updateAllUser);

export default router;