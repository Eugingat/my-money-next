import jwt from 'jsonwebtoken';
import clientPromise from "@/app/lib/mongodb";
import {registerTS} from "sucrase/dist/types/register";
import {ObjectId} from "mongodb";
import {createToken} from "@/app/utils/token";

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

    const token = createToken({name: dbUser.name, id: dbUser._id });

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
    console.log(1111111);
    const client = await clientPromise;
    const db = client.db('my-money');

    const collectionCategories = db.collection('categories');
    console.log(collectionCategories);
    const collectionUsers = db.collection('users');
    console.log(collectionUsers);

    const isUser = await collectionUsers.findOne({ login: user.login });

    console.log(2222222);
    console.log(isUser);

    if (isUser) {
        return false;
    }

    const category = await collectionCategories.insertOne({
        mainCategories: [],
        replenishmentCategories: [],
        transactions: []
    });

    await collectionUsers.insertOne({ ...user, category: category.insertedId });

    return true;
};