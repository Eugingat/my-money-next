'use server';
import {redirect, RedirectType} from "next/navigation";
import {register} from "@/app/utils/auth/auth";
import {toast} from "sonner";
import {revalidatePath} from "next/cache";



export default async function formAction(prevState: any, formData: FormData){
    try {
        if ((formData.get('login') as string).trim().length < 3) {
            throw new Error('Login: ' + 'Длина логина не должна быть меньше 3');
        }

        if ((formData.get('name') as string).trim().length < 2) {
            throw new Error('Name: ' + 'Длина имени не должна быть меньше 2');
        }

        if ((formData.get('password') as string).length < 6) {
            throw new Error('Password: ' + 'Длина пароля не должна быть меньше 6');
        }

        const user = {
            login: formData.get('login') as string,
            name: formData.get('name') as string,
            password: formData.get('password') as string,
        }

        const status = await register(user);

        if (!status) {
            throw new Error('Busy: Sorry, this login is busy');
        }

        revalidatePath('/register');
    } catch(error: any) {
        return {
            error: error.message,
        }
    }

    redirect('/?register=true', RedirectType.push);
}