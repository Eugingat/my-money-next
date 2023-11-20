'use server';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {sigIn} from "@/app/utils/auth/auth";
import {cookies} from "next/headers";

export default async function formAction(prevState: any, formData: FormData){
   let result;

   try {
      if (formData.get('login')!.length < 2) {
         throw new Error('Длина логина не должна быть меньше 3')
      }

      if (formData.get('password')!.length < 6) {
         throw new Error('Длина пароля не должна быть меньше 6')
      }

      const user = {
         login: (formData.get('login') as string),
         password: (formData.get('password') as string),
      }

      result = await sigIn(user)

      if (result.error && !result.redirect) {
         throw new Error(result.status)
      }

      revalidatePath('/');
   } catch(error: any) {
      return {
         error: error.message,
      }
   }

   if (result.error && result.redirect) {
      redirect(`/?${result.status}=true`);
   }

   cookies().set('token', result.token!)

   redirect(`/${result.id}`);
}