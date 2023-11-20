export default function Welcome({name}: {name?: string}) {

    if (name) {
        return (
            <div className='uppercase text-center text-7xl font-mono flex flex-col gap-6 mt-6 dark:text-white' >
                <h1> welcome, <span className='uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>{name}</span> </h1>
            </div>
        )
    }
    return (
        <div className='uppercase text-center text-7xl font-mono flex flex-col gap-6 dark:text-white' >
            <h1> welcome to the application </h1>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> My money</h1>
        </div>
    )
}