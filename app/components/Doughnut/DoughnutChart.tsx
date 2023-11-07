'use client';

import {useState} from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

interface IDatasets {
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
}

export default function DoughnutChart() {

    const [labels, setLabels] = useState<string[]>([])
    // @ts-ignore
    const [datasets, setDatasets] = useState<IDatasets[]>([{
        data: [],
        backgroundColor: [],
        hoverOffset: 4}
    ])


    return (
        <div className=''>
            <Chart type='doughnut' data={{
                labels,
                datasets,
            }} options={{plugins: { legend: { display: false} }}}/>
            <button onClick={() => {
                setLabels([...labels, 'Yellow']);
                setDatasets([{
                    data: [100],
                    backgroundColor: [
                        '#be38f3',
                    ],
                    hoverOffset: 4}])
            }}> Add </button>
        </div>
    )
}