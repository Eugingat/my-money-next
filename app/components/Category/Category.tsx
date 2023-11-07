'use client';

type PropsCategory = {
    color: string;
    name: string;
    icon?: string;
}

export default function Category({color, name,  icon}: PropsCategory) {
    return (
        <div>
            <input type='color' onChange={(e) => {
                console.log(e.target.value);
            }} value={color}/>
            <label> {name}</label>
        </div>
    )
}