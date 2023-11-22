import {ReactNode} from "react";
import Link from "next/link";
import Header from "@/app/components/Header/Header";

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
            {params?.id && <Header />}
            <div>
                {children}
            </div>
        </>
    )
}