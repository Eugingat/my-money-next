type PropsType = {
    count: number;
}

export default function CountMoney({count}: PropsType) {
    return (
        <section>
            <button> - </button>
            <p>
                {count}
            </p>
            <button> + </button>
        </section>
    )
}