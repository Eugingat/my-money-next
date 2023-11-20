export default function TextForm({ text }: {text: string}) {
    return <p className='text-center text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'> {text}</p>
}