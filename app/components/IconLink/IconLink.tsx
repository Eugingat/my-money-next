import Link from "next/link";
import {IconType} from "react-icons";

export default function IconLink({link, Icon}: {link: string, Icon: IconType}) {
    return <Link href={link}> <Icon size={24} /> </Link>
}