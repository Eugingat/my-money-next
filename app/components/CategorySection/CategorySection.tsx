import Category from "@/app/components/Category/Category";

type Props = {
    categories: {
        name: string;
        icon?: string;
        color: string;
        value: number;
    }[]
}
export default function CategorySection({categories}: Props) {
    return (
        <section className='border-r-2 border-blue-500'>
            {categories.map(({name, color, icon}) => {
                return <Category key={name} color={color} name={name} />
            })}
        </section>
    )
}