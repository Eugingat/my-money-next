'use client';

import Category from "@/app/components/Category/Category";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {ChangeEvent, useEffect, useState} from "react";

type Props = {
    categories: {
        id: number;
        name: string;
        icon?: string;
        color: string;
        value: number;
    }[]
}

export default function CategorySection({categories}: Props) {
    const [filteredCategories, setFilteredCategories] = useState<Props["categories"]>([]);

    const handlerFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setFilteredCategories([...categories.filter(({name}) => name.toLowerCase().includes(e.target.value.toLowerCase().trim()))])
    }

    useEffect(() => {
        setFilteredCategories([...categories])
    }, []);

    const deleteCategoryHander = (id: number) => {
        // тут должен быть запрос на апи для удаления из бд

        setFilteredCategories([...categories.filter(({id: currentId}) => currentId !== id )])
    }


    return (
        <section className='border-r-2 border-blue-500'>
            <div className='flex flex-row gap-4 py-4 px-2'>
                <input className='grow text-xl px-2' type='text' onChange={handlerFilter} placeholder='Find category'/>
                <button title='Add category'> <AiOutlinePlusCircle title='Add category' size={24} /> </button>
            </div>
            {filteredCategories.map(({id,name, color, icon}) => {
                return <Category key={id} id={id} color={color} name={name} icon={icon} deleteCategoryHander={deleteCategoryHander}/>
            })}
        </section>
    )
}