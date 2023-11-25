'use client';

import { IoLogOutOutline } from "react-icons/io5";
import {useRouter} from "next/navigation";

export default function ButtonLogout() {

    const router = useRouter()
    const logoutHandler = async () => {
        const response = await fetch('/api/auth', {
            method: 'PUT'
        });

        if (response.ok) {
            router.replace('/?logout=true');
        }
    }

    return (
        <div onClick={logoutHandler}>
            <IoLogOutOutline size={24} />
        </div>
    )
}