import History from "@/app/components/History/History";
import ChartSection from "@/app/components/ChartSection/ChartSection";
import CategorySection from "@/app/components/CategorySection/CategorySection";
import Welcome from "@/app/components/Welcome/Welcome";
import {getUserDB} from "@/app/utils/db-user";
import {cookies} from "next/headers";
import {verifyToken} from "@/app/utils/token";

type Params = {
    params: {
        id: string;
    }
}

const getUser = async (id: string) => {
    const token= cookies().get('token')!.value;

    verifyToken(token);

    return await getUserDB(id, token)
}


export default async function Main({params}: Params) {
    const {name, category} = await getUser(params.id);

    return (
        <>
            <Welcome name={name} />
            <main className='my-16 mx-4 border-solid border-2 border-blue-500 shadow-lg shadow-blue-800 grid grid-cols-3 grid-rows-1'>
                <CategorySection categories={category.mainCategories}/>
                <ChartSection categories={category.mainCategories} replenishmentCategories={category.replenishmentCategories}/>
                <History transactions={category.transactions} />
            </main>
        </>
        );
}