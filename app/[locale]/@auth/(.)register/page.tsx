import Modal from "@/app/components/Modals/Modal";
import FormRegister from "@/app/components/FormRegister/FormRegister";
import {Toaster} from "sonner";

export default function RegModal() {

    return (
        <Modal>
            <Toaster richColors position="top-center" expand={false}/>
            <FormRegister />
        </Modal>
    )
}