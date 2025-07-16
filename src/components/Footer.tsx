import { PiXLogoBold } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaArtstation } from "react-icons/fa";
import { Link } from "react-router-dom";
const socialNetworks = [
    {
        icon: <PiXLogoBold className="!text-zinc-200" size={25} />,
        link: ''
    },
    {
        icon: <IoLogoInstagram className="!text-zinc-200" size={25} />,
        link: ''
    },
    {
        icon: <FaArtstation className="!text-zinc-200" size={25} />,
        link: ''
    }
]

export default function () {
    return <div className="min-h-30  opacity-70 items-center justify-around flex">
        <div className="flex items-center gap-4 justify-around">
            {socialNetworks.map(e => e.icon)}
        </div>
        <p className="text-lg  rounded-2xl p-2 px-10 text-white font-bold tracking-wider ">nina.mohammedi@outlook.fr</p>
        <div className="flex gap-2">
            <Link className="text-white font-medium text-md" to={'/about'} >Contact</Link>
            <span className="text-rose-400"> | </span>
            <Link className="text-white font-medium text-md" to={'/about'} >About</Link>
        </div>
    </div>
}