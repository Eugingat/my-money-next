import FormAuth from "@/app/components/FormAuth/FormAuth";
import Welcome from "@/app/components/Welcome/Welcome";
import clientPromise from "@/app/lib/mongodb";
import {Toaster} from "sonner";

const getTest = async () => {
    const client = await clientPromise



}

export default async function Home() {
  // await getTest();

  return (
      <>
          <Toaster richColors position="top-center" expand={false}/>
          <main className='flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Welcome />
              <FormAuth/>
          </main>
      </>

  )
}
