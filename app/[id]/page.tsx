import History from "@/app/components/History/History";
import ChartSection from "@/app/components/ChartSection/ChartSection";
import CategorySection from "@/app/components/CategorySection/CategorySection";

type Props = {
    params: {
        id: string;
    }
}

export default function Main({params}: Props) {

    return (
        <main className='my-16 mx-4 border-solid border-2 border-blue-500 shadow-lg shadow-blue-800 grid grid-cols-3 grid-rows-1'>
            <CategorySection />
            <ChartSection />
            <History />
        </main>);
}