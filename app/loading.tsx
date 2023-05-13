"use client";

import Image from "next/image";
import logo from "../images/logo.svg";
import {motion} from "framer-motion";

function Loading() {
    return ( 
        <div className="flex bg-blue justify-center items-center h-screen w-full fixed z-[90]">
           <motion.div 
           initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.7}}
           className="bg-gradient-to-br from-tan to-tan/30 backdrop-blur-xl animate-bounce duration-300 rounded-full h-12 w-12">

           </motion.div>
        </div>
     );
}

export default Loading;