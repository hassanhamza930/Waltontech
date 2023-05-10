import Image from "next/image";
import logo from "../images/logo.svg";

function Loading() {
    return ( 
        <div className="flex justify-center items-center h-screen w-full fixed z-[90]">
           <div className="bg-tan rounded-full h-36 w-36">

           </div>
        </div>
     );
}

export default Loading;