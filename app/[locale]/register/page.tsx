import FormRegister from "@/app/components/FormRegister/FormRegister";
import {Toaster} from "sonner";

export default function RegPage() {
    return (
        <>
            <Toaster richColors position="top-center" expand={false}/>
            <main className='flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <FormRegister />
            </main>
        </>
    );

}