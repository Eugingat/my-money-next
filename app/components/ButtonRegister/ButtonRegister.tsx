import {useRouter} from "next/navigation";
import Link from "next/link";
import {useCurrentLocale} from "@/locales/client";

export default function ButtonRegister() {
    const router = useRouter();

    return (
        <input onClick={() => router.push(`/register`)} type='type' value='Register' className='text-center bg-indigo-600 text-white py-2 rounded-lg hover:cursor-pointer'/>
    )
}