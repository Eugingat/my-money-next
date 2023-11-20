import {ReactNode} from "react";
import Link from "next/link";

export default function LayoutChild(
    {
        params,
        children
    }: {
        params: { id: string},
        children: ReactNode
    }) {
    return (
        <>
            {params?.id && <header className='py-4 bg-indigo-600 text-white'>
                <div>
                    <Link href='/'> Home </Link>
                </div>
            </header>}
            <div>
                {children}
            </div>
        </>
    )
}