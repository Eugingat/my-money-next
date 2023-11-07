'use client';

export default function Category() {


    return (
        <div>
            <input type='color' onChange={(e) => {
                console.log(e.target.value);
            }}/>
        </div>
    )
}