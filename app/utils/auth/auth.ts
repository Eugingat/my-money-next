import jwt from 'jsonwebtoken';
import clientPromise from "@/app/lib/mongodb";
import {registerTS} from "sucrase/dist/types/register";

interface IUser {
    login: string;
    password: string;
    name: string;
}

export const sigIn = async (user: Omit<IUser, 'name'>) => {

};

export const logout = async () => {

};

export const register = async (user: IUser): Promise<boolean> => {
    const client = await clientPromise;
    const db = client.db('my-money');

    const collection = db.collection('users');

    const isUser = await collection.findOne({ login: user.login });

    if (isUser) {
        return false;
    }

    console.log(isUser);

    // const token = jwt.sign(user, process.env.SECRET_KEY || '123456', { expiresIn: '24h'})

    await collection.insertOne(user);

    return true;
};