import {useFormStatus} from "react-dom";
import { BiLoaderAlt } from "react-icons/bi";
export default function SubmitButton({text}: {text: string}) {
    const {pending} = useFormStatus();

    if (pending) {
        return (
            <p className='flex justify-center bg-indigo-600 text-white py-2 rounded-lg text-2xl'> <span className='animate-spin'><BiLoaderAlt /> </span></p>
        )
    }

    return (
        <input disabled={pending} type='submit' value={text} className='text-center bg-indigo-600 text-white py-2 rounded-lg hover:cursor-pointer'/>
    )
}