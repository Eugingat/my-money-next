import IconLink from "@/app/components/IconLink/IconLink";
import { MdHome } from "react-icons/md";
import Theme from "@/app/components/Header/Theme/Theme";
import ButtonLogout from "@/app/components/Header/ButtonLogout/ButtonLogout";
import Language from "@/app/components/Header/Language/Language";
export default function Header() {
    return (
        <header className='py-4 px-4 bg-indigo-600 text-white flex justify-end items-center gap-6'>
            <div>
                <IconLink link='/' Icon={MdHome} />
            </div>
            <Language />
            <div>
                <Theme />
            </div>
            <ButtonLogout />
        </header>
    );
}