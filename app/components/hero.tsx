"use client";

import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { isHidden } from "../design/atoms";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import logo from "../../images/design/logo.svg";
import Image from "next/image";


function Hero() {

    const [hidden, setHidden] = useRecoilState(isHidden);
    const { ref, inView, entry } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setHidden(true);
        }
        else {
            setHidden(false);
        }
    }, [inView]);



    return (
        <div ref={ref} className="bg-tan flex h-full w-full justify-center items-center">
            <div className="h-full flex flex-col justify-start w-full items-center pt-48 md:pb-24">


                <motion.div className="hidden md:flex flex-row justify-between items-end w-[60%] gap-5 pb-48">
                    <div className="flex flex-row justify-start items-center gap-4">
                        <Image src={logo} alt="waltondesign logo" className="h-12 w-12 md:h-20 md:w-20" />
                        <motion.div className="text-6xl font-light">Walton</motion.div>
                    </div>
                    <div className="flex flex-col justify-end items-end w-full">
                        <motion.div className="text-md font-light italic text-right"><span className="font-medium">Meaning:</span> walled town. Walton as a boy's name is of Old English origin,<br /> and the meaning of Walton is "walled town"</motion.div>
                        <motion.div className="text-md font-light underline"><span className="font-medium">It is also the name of our hometown</span></motion.div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
                    className="text-3xl md:text-4xl font-light w-4/5 md:w-[60%]">We are a full stack <span className="underline ">SAAS</span> dev agency<br />in the heart of Pakistan.</motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7, ease: "easeInOut" }}
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1658937364065-60f3f6818724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80")` }}
                    className="relative z-0 mt-36 bg-cover bg-center bg-no-repeat h-96 w-full md:w-[60%] bg-black/90 rounded-sm md:rounded-md flex justify-end items-end">

                </motion.div>


            </div>
        </div>
    );
}

export default Hero;