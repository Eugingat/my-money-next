'use client';

import {useFormState} from 'react-dom';
import SubmitButton from "@/app/components/SubmitButton/SubmitButton";
import action from "@/app/components/FormAuth/actions/form-action";

export default function FormAuth() {
    const [state, formAction] = useFormState(action, { login: null, password: null })
    return (
        <form className='flex flex-col gap-6 border-solid border-2 border-blue-500 p-8 mt-12 w-120 self-center shadow-xl shadow-indigo-500/50' action={formAction}>
            <div>
                <div className='border-solid border-2 border-b border-b-slate-400 border-slate-500 rounded-t-2xl'>
                    <input className='w-full border-0 border-solid rounded-t-xl p-2 bg-slate-200 placeholder:text-slate-600 focus:ring focus:ring-inset focus:ring-indigo-600' type='login' autoComplete='login' id='login' name='login' placeholder='Login' required/>
                </div>
                <div className='border-solid border-2 border-t-0 border-slate-500 rounded-b-2xl'>
                    <input className='w-full border-0 border-solid rounded-b-xl p-2 bg-slate-200 placeholder:text-slate-600 focus:ring focus:ring-inset focus:ring-indigo-600' type='password' autoComplete='password' id='password' name='password' placeholder='Password' required/>
                </div>
                <p> {state?.error}</p>
            </div>
            <SubmitButton />
        </form>
    )
}