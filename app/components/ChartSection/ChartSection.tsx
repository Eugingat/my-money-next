import DoughnutChart from "@/app/components/Doughnut/DoughnutChart";
import CountMoney from "@/app/components/CountMoney/CountMoney";

export default function ChartSection() {
    return (
        <section className='border-r-2 border-blue-500'>
            <DoughnutChart />
            <CountMoney />
        </section>
    )
}