'use server';
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export default async function formAction(prevState: any, formData: FormData){
   try {
      if (formData.get('login')!.length < 2) {
         throw new Error('Длина логина не должна быть меньше 3')
      }

      if (formData.get('password')!.length < 6) {
         throw new Error('Длина пароля не должна быть меньше 6')
      }
      revalidatePath('/');
   } catch(error: any) {
      return {
         error: error.message,
      }
   }

   redirect('/1');
}