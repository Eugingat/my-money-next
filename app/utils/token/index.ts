import jwt from "jsonwebtoken";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

export const createToken = (data: {}) => {
    return jwt.sign(data, process.env.SECRET_KEY!, {expiresIn: '24h'})
};

export const deleteToken = (key: string) => {
    cookies().delete('token');

    redirect(`/?${key}=true`);
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, process.env.SECRET_KEY!);
    } catch {
        deleteToken('expired');
    }
}