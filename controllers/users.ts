import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

interface User {
    id: string;
    name: string;
    email: string;
    birth: string;
}

//Read the users data from users.json
let users: User[] = JSON.parse(fs.readFileSync('./user.json', 'utf-8'));

export const createUser = (req: Request, res: Response): void => {
    const user: User = req.body;
    console.log(user);
    users.push({...user, id: uuidv4()});
    // Write the updated users back to the JSON file
    fs.writeFileSync('./user.json', JSON.stringify(users));
    res.send('User added successfully!');
};

export const getAllUsers = (req: Request, res: Response): void => {
    res.send(users);
};

export const getUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const foundUser: User | undefined = users.find((user) => user.id === id);
    if (!foundUser) {
        res.status(404).send(`User with the id ${id} not found`);
    } else {
        res.send(foundUser);
    }
};

export const deleteUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    // Write the updated users back to the JSON file
    fs.writeFileSync('./user.json', JSON.stringify(users));
    res.send(`User with the id ${id} deleted from the database.`);
};

export const updateUser =  (req: Request, res: Response): void => {
    const { id } = req.params;
    const { name, email, birth } = req.body;
    const user: User | undefined = users.find((user) => user.id === id);
    if (!user) {
        res.status(404).send(`User with the id ${id} not found`);
        return;
    }
    if (name) user.name = name;
    if (email) user.email = email;
    if (birth) user.birth = birth;
    // Write the updated users back to the JSON file
    fs.writeFileSync('./user.json', JSON.stringify(users));
    res.send(`User with the id ${id} has been updated`);
};

export const updateAllUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { name, email, birth } = req.body;
    const user: User | undefined = users.find((user) => user.id === id);
    if (!user) {
        res.status(404).send(`User with the id ${id} not found`);
        return;
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.birth = birth || user.birth;
    // Write the updated users back to the JSON file
    fs.writeFileSync('./user.json', JSON.stringify(users));
    res.send(`User with the id ${id} has been updated`);
};