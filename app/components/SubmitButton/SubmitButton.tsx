import {useFormStatus} from "react-dom";

export default function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <input disabled={pending} type='submit' value='Sign in' className='text-center bg-indigo-600 text-white py-2 rounded-lg'/>
    )
}