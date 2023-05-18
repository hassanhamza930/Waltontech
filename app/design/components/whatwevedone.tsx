"use client";

import { MdArrowDropDown } from "react-icons/md";
import { Disclosure, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isBlackBackgroundAtom } from "../atoms";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";

interface CompanyCardProps {
    title: string,
    description: string,

}

function CompanyCard(props: CompanyCardProps) {
    const [detailsOpen, setdetailsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            variants={{
                "visible": { opacity: 1, y: 0 },
                "hidden": { opacity: 0, y: 20 },
            }}
            transition={{ duration: 1, delay: 0.2 }}
            whileInView={"visible"}
            className="h-96 w-[47%] bg-black rounded-xl">

        </motion.div>
    )
}


function Whatwvedone() {



    return (

        <div className="flex justify-center items-center w-full h-full bg-tan text-black/90">
            <div className="flex flex-col justify-start items-center w-[80%] md:gap-0 gap-12 md:w-[60%] h-full py-24 md:py-72">

                <div className="flex justify-start items-center w-full h-full ">

                    <div className="flex flex-col justify-start items-start w-full">
                        <motion.div
                            initial="hidden"
                            variants={{
                                "visible": { opacity: 1, y: 0 },
                                "hidden": { opacity: 0, y: 20 },
                            }}
                            transition={{ duration: 1, delay: 0.3 }}
                            whileInView={"visible"}
                            className="text-5xl md:text-6xl font-semibold">What We've done.</motion.div>
                        <motion.div
                            initial="hidden"
                            variants={{
                                "visible": { opacity: 1, y: 0 },
                                "hidden": { opacity: 0, y: 20 },
                            }}
                            transition={{ duration: 1, delay: 0.5 }}
                            whileInView={"visible"}
                            className="text-xl md:text-2xl font-regular mt-8 md:mt-16">Stories from around the globe.</motion.div>
                    </div>

                </div>



                <div className="flex flex-wrap w-full h-full justify-between items-start mt-10">
                            
                            <CompanyCard title="Careernetwork.co" description="A career focused social media app ."/>
                            <CompanyCard title="PAN Coin" description="A landing page for a meme coin"/>

                </div>




            </div>
        </div>
    );
}

export default Whatwvedone;