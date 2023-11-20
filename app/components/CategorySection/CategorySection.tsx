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
    }, [categories]);

    const deleteCategory = (id: number) => {
        // тут должен быть запрос на апи для удаления из бд

        setFilteredCategories([...categories.filter(({id: currentId}) => currentId !== id )])
    };

    const changeColorCategory = (e: ChangeEvent<HTMLInputElement>, id: number) => {
        // тут запрос на сервер по обновлению цвета
        // есть идея по поводу вызова обновления кэша запрос на категории но думаю плохая идея
        const index = filteredCategories.findIndex(({id: currentId}) => currentId === id);
        const category = filteredCategories.find(({id: currentId}) => currentId === id);

        if (category) {
            category.color = e.target.value;

            setFilteredCategories([...filteredCategories.with(index, category)])
        }

    }


    return (
        <section className='border-r-2 border-blue-500'>
            <div className='flex flex-row gap-4 py-4 px-2'>
                <input className='grow text-xl px-2' type='text' onChange={handlerFilter} placeholder='Find category'/>
                <button title='Add category'> <AiOutlinePlusCircle title='Add category' size={24} /> </button>
            </div>
            {filteredCategories.map(({id,name, color, icon}) => {
                return <Category key={id} id={id} color={color} name={name} icon={icon} deleteCategory={deleteCategory} changeColorCategory={changeColorCategory}/>
            })}
        </section>
    )
}