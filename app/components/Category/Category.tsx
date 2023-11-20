import { AiFillDelete } from "react-icons/ai";
import React, {ChangeEvent} from "react";
import {icons} from "@/app/constants/icons";

type PropsCategory = {
    id: number;
    color: string;
    name: string;
    icon?: string;
    deleteCategory: (id: number) => void;
    changeColorCategory: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
}


export default function Category({id, color, name,  icon = 'default', deleteCategory, changeColorCategory}: PropsCategory) {
    // @ts-ignore
    const Icon = icons[icon];

    return (
        <div className='flex flex-row justify-between px-2 border-b border-solid border-b-slate-400 text-3xl items-center'>
            <div className='flex flex-row justify-center items-center gap-3'>
                <input className='rounded-full h-6 w-6' style={{backgroundColor: color}} type='color' onChange={(e) => changeColorCategory(e, id)} value={color}/>
                <Icon color={color} />
                <label> {name} </label>
            </div>
            <div onClick={() => deleteCategory(id)}>
                <AiFillDelete title='Delete this category'/>
            </div>
        </div>
    )
}