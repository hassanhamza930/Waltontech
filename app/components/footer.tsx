import Image from "next/image";
import logo from "../../images/logo.svg";
import footer from "../../images/footer.svg"
import { usePathname } from "next/navigation";

function Footer() {

    const pathname=usePathname();

    if(pathname!="/design"){
        return (  
            <div className="bg-gradient-to-b from-blue to-black/80 relative z-50 flex flex-col h-24` md:h-72 w-full justify-center items-center">
                <Image
                alt="waltontech logo"
                src={footer}
                className="hidden md:flex w-full h-full object-cover object-center"
                />
                <Image
                alt="waltontech logo"
                src={logo}
                className="w-36 h-24 md:hidden flex"
                />
            </div>
        );
    }
    else{
        return <></>
    }
}

export default Footer;