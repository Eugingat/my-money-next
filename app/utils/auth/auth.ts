import jwt from 'jsonwebtoken';
import clientPromise from "@/app/lib/mongodb";
import {registerTS} from "sucrase/dist/types/register";
import {ObjectId} from "mongodb";

interface IUser {
    login: string;
    password: string;
    name: string;
}

export const sigIn = async (user: Omit<IUser, 'name'>) => {
    const client = await clientPromise;
    const db = client.db('my-money');

    const collection = db.collection('users');

    const dbUser = await collection.findOne({ login: user.login });

    if (!dbUser) {
        return {
            status: 'non-login',
            error: true,
            redirect: true,
        };
    }

    if (dbUser.password !== user.password) {
        return {
            status: 'incorrect-password',
            error: true,
            redirect: false,
        }
    }

    const token = jwt.sign({name: dbUser.name, id: dbUser._id }, process.env.SECRET_KEY!, { expiresIn: '24h'})

    await collection.updateOne({ _id: dbUser._id}, { $set: { token }});

    return {
        error: false,
        token,
        id: dbUser._id
    }
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