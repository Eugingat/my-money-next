import HistoryItem from "@/app/components/HistoryItem/HistoryItem";

type Props = {
    transactions: string[];
}

export default function History({transactions = []}: Props) {
    return (
        <section>
            <h3> History </h3>
            {transactions.map(transaction => {
                return <HistoryItem key={transaction} transaction={transaction} />
            })}
        </section>
    )
}