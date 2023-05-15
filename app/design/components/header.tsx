"use client";

import Image from "next/image";
import logo from "../../../images/design/logo.svg";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { text } from "stream/consumers";


interface HeaderProps {
    sideBarOpen: boolean,
    setSideBarOpen: Function,
    y?:number
}


interface AnimatedText {
    text: string,
}


export function AnimatedText(props: AnimatedText) {
    var text = props.text;
    var textArray = text.split("");
    // console.log(textArray);

    return (
        <div className="flex flex-row justify-center h-12 overflow-y-hidden items-center">
            {
                textArray.map((letter, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
                            className="text-3xl md:text-4xl font-light">
                            {letter.toString()}
                        </motion.div>
                    )
                })
            }
        </div>
    )


}




export function SideMenu(props: HeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="h-screen w-full fixed z-20 bg-black/90 backdrop-blur-sm flex justify-end items-start p-5">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                className="bg-tan/90 text-purp shadow-xl rounded-md gap-5 pb-20 w-full md:w-96 p-10 flex flex-col justify-start items-start">
                <button onClick={() => { props.setSideBarOpen(false); }} className="flex hover:scale-[1.03] transition-all duration-300 flex-row w-full justify-end items-end">
                    <AiOutlineClose size={25} className=" " />
                </button>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                    className="hover:scale-105 hover:ml-2 hover:underline transiton-all duration-300 text-2xl ">What we do</motion.button>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }} className="hover:scale-105 hover:ml-2 hover:underline transiton-all duration-300 text-2xl ">About</motion.button>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }} className="hover:scale-105 hover:ml-2 hover:underline transiton-all duration-300 text-2xl ">Work</motion.button>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }} className="text-left flex flex-col justify-start items-start hover:scale-105 hover:ml-2 hover:underline transiton-all duration-300 ">
                    <div className="text-2xl">Contact</div>
                    <div className=" ">hamza@waltontech.co</div>

                </motion.button>



            </motion.div>
        </motion.div>
    )
}


function Header(props:HeaderProps) {



    return (
        <div style={{backgroundColor:""}} className="w-full fixed z-10 flex py-3 flex-row justify-between items-center px-5 md:px-[10%]">
            <div className="flex flex-row justify-center items-center gap-2 ">
                <Image src={logo} alt="waltondesign logo" className="h-12 w-12 md:h-20 md:w-20" />
                {/* <div className="text-3xl md:text-4xl font-light">Walton</div> */}
                <AnimatedText text="Walton" />
            </div>

            <button className="" onClick={() => { props.setSideBarOpen(true) }}>
                <GiHamburgerMenu className="text-black/90" size={25} />
            </button>

        </div>
    );
}

export default Header;