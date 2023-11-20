'use client';

import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import {useFormState} from "react-dom";
import action from "@/app/components/FormRegister/action/form-action";
import TextForm from "@/app/components/TextForm/TextForm";
import {toast} from "sonner";
import {useEffect} from "react";

export default function FormRegister() {
    const [state, formAction] = useFormState(action, { login: null, name: null, password: null });

    useEffect(() => {
        if (state?.error && state?.error.includes('Busy: ')) {
            toast.error(state?.error.replace(/busy: /i, ''));
        }
    }, [state])

    const filteredError = (error : string = ''): { errorLogin?: string, errorName?: string, errorPassword?: string} => {

        if (error.includes('Login: ')) {
            return {errorLogin: error.replace(/login: /i, '')}
        }

        if (error.includes('Name: ')) {
            return {errorName: error.replace(/name: /i, '')}
        }

        if (error.includes('Password: ')) {
            return {errorPassword: error.replace(/password: /i, '')}
        }

        return {};
    }


    return (
        <form action={formAction} className='flex flex-col gap-6 border-solid border-2 border-blue-500 p-8 self-center shadow-xl shadow-indigo-500/50 bg-slate-200'>
            <TextForm text={'Please enter your registration details'} />

            <div>
                <div className='border-solid border-2 border-slate-500'>
                    <input className='w-full border-0 border-solid p-2 bg-slate-200 placeholder:text-slate-600 focus:ring focus:ring-inset focus:ring-indigo-600' type='login' autoComplete='login' id='login' name='login' placeholder='Login' required/>
                </div>
                <p className='text-red-500 text-sm h-5'>{filteredError(state?.error)?.errorLogin}</p>
            </div>

            <div>
                <div className='border-solid border-2 border-slate-500'>
                    <input className='w-full border-0 border-solid p-2 bg-slate-200 placeholder:text-slate-600 focus:ring focus:ring-inset focus:ring-indigo-600' type='name' autoComplete='name' id='name' name='name' placeholder='Name' required/>
                </div>
                <p className='text-red-500 text-sm h-5'>{filteredError(state?.error)?.errorName}</p>
            </div>

            <div>
                <div className='border-solid border-2 border-slate-500'>
                    <input className='w-full border-0 border-solid p-2 bg-slate-200 placeholder:text-slate-600 focus:ring focus:ring-inset focus:ring-indigo-600' type='password' autoComplete='password' id='password' name='password' placeholder='Password' required/>
                </div>
                <p className='text-red-500 text-sm h-5'>{filteredError(state?.error)?.errorPassword}</p>
            </div>

            <SubmitButton text='Register' />
        </form>
    )
}