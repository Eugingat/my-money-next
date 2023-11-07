import DoughnutChart from "@/app/components/Doughnut/DoughnutChart";
import CountMoney from "@/app/components/CountMoney/CountMoney";

type PropsType = {
    categories: {
        name: string;
        icon?: string;
        color: string;
        value: number;
    }[];
    replenishmentCategories: {
        name: string;
        value: number;
    }[];
}

type PrevValueType = {
    names: string[];
    colors: string[];
    values: number[]
}
export default function ChartSection({categories, replenishmentCategories}: PropsType) {
    const createData = (categories: PropsType["categories"]) => {
        return categories.reduce((previousValue: PrevValueType, currentValue) => {
            return {
                names: [...previousValue.names, currentValue.name],
                colors: [...previousValue.colors, currentValue.color],
                values: [...previousValue.values, currentValue.value]
            }
        }, {names: [], colors: [], values: []})
    }

    const getCount = (categories: PropsType["categories"], replenishmentCategories: PropsType["replenishmentCategories"]): number => {
        const categoriesValue = categories.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0);
        const replenishmentCategoriesValue = replenishmentCategories.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0);

        return replenishmentCategoriesValue - categoriesValue;
    }

    return (
        <section className='border-r-2 border-blue-500'>
            <DoughnutChart {...createData(categories)}/>
            <CountMoney count={getCount(categories, replenishmentCategories)}/>
        </section>
    )
}