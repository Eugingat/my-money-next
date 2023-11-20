import History from "@/app/components/History/History";
import ChartSection from "@/app/components/ChartSection/ChartSection";
import CategorySection from "@/app/components/CategorySection/CategorySection";
import Welcome from "@/app/components/Welcome/Welcome";

type Params = {
    params: {
        id: string;
    }
}

const testData = [
    {
        id: 1,
        name: 'Vasya',
        categories: [
            {
            id: 1,
            name: 'Food',
            icon: 'food',
            color: '#96d35f',
            value: 100
            },
            {
                id: 2,
                name: 'Gym',
                icon: 'gym',
                color: '#7b219f',
                value: 100
            },

        ],
        replenishmentCategories: [{
            id: 1,
            name: 'Salary',
            value: 250
        }],
        transactions: []
    }
]


export default async function Main({params}: Params) {
    const user = testData[0];
    return (
        <>
            <Welcome name={user.name} />
            <main className='my-16 mx-4 border-solid border-2 border-blue-500 shadow-lg shadow-blue-800 grid grid-cols-3 grid-rows-1'>
                <CategorySection categories={user.categories}/>
                <ChartSection categories={user.categories} replenishmentCategories={user.replenishmentCategories}/>
                <History transactions={user.transactions} />
            </main>
        </>
        );
}