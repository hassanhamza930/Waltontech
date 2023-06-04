"use client";

import { MdArrowDropDown } from "react-icons/md";
import { Disclosure, Transition } from '@headlessui/react';
import { Fragment, ReactElement, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isBlackBackgroundAtom } from "../atoms";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";
import Image, { StaticImageData } from "next/image";
import transformationlabs from "../../images/design/transformationlabs.png";
import wavehr from "../../images/design/wavehr.png";
import cn from "../../images/design/cn.png";
import pan from "../../images/design/pan.png";

import { TbExternalLink } from "react-icons/tb";

interface CompanyCardProps {
    title: string,
    description: string,
    website?: string,
    img: StaticImageData

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
            className="relative z-0 h-96 w-full md:w-[45%] bg-tan hover:scale-105 text-black/90 transition-all duration-300 rounded-xl overflow-hidden shadow-md">
            
            {/* <div className="absolute z-10 w-full h-full object-cover object-center bg-gradient-to-b from-black to-black/0">
            </div> */}

            <div className="flex flex-col justify-start items-start h-full w-full">



                <div className="z-20 flex flex-col md:flex-row w-full justify-start items-start md:justify-between md:items-center ">
                    <div className="text-2xl font-medium px-6 md:pl-5 mt-3">
                        {props.title}
                    </div>
                    {
                        // props.website != undefined &&
                        // <button onClick={() => { window.open(props.website) }} className="md:flex hidden gap-2 shadow-xl hover:scale-[1.02] transition-all duration-300 flex-row justify-center items-center text-md bg-tan/90 rounded-full px-12 py-3 font-medium text-black/90 mr-10 mt-6">
                        //     {/* Website */}
                        //     <TbExternalLink />
                        // </button>
                    }
                </div>
                <div className=" z-20 text-md font-light px-6 md:px-5 mt-1 w-full">
                    {props.description}
                </div>

                <div style={{ backgroundImage: `url('${props.img.src}')` }} className="bg-cover bg-center h-full w-full flex justify-center items-center mt-5">

                </div>

            </div>



        </motion.div>
    )
}


function Whatwvedone() {



    return (

        <div className="flex justify-center items-center w-full h-full bg-tan text-black/90">
            <div id="work" className="flex flex-col justify-start items-center w-[80%] md:gap-0 gap-12 md:w-[60%] h-full py-24 md:py-72">

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



                <div className="flex flex-wrap w-full h-full justify-start items-start md:mt-16 gap-10">

                    <CompanyCard img={cn} website="https://careernetwork.co" title="Careernetwork.co" description="Design & Development of a career focused social media app ." />
                    <CompanyCard img={wavehr} website="https://wavehr.vercel.app" title="WaveHR" description="Design and Development for a recruitment based SaaS app." />
                    <CompanyCard img={pan} title="PAN Coin" description="Landing page for a meme coin." />
                    <CompanyCard img={transformationlabs} title="TransformationLabs.io" description="Design Revamp for a product management consulting company from Canada." />

                </div>




            </div>
        </div>
    );
}

export default Whatwvedone;