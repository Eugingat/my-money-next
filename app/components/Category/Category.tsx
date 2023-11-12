'use client';
import { AiFillDelete } from "react-icons/ai";
import React from "react";
import {icons} from "@/app/constants/icons";

type PropsCategory = {
    id: number;
    color: string;
    name: string;
    icon?: string;
    deleteCategoryHander: (id: number) => void;
}


export default function Category({id, color, name,  icon = 'default', deleteCategoryHander}: PropsCategory) {
    // @ts-ignore
    const Icon = icons[icon];

    return (
        <div className='flex flex-row justify-between px-2 border-b border-solid border-b-slate-400 text-3xl items-center'>
            <div className='flex flex-row justify-center items-center gap-3'>
                <input className='rounded-full h-6 w-6' style={{backgroundColor: color}} type='color' onChange={(e) => {
                    console.log(e.target.value);
                }} value={color}/>
                <Icon color={color} />
                <label> {name} </label>
            </div>
            <div onClick={() => deleteCategoryHander(id)}>
                <AiFillDelete title='Delete this category'/>
            </div>
        </div>
    )
}