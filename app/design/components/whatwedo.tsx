"use client";

import { MdArrowDropDown } from "react-icons/md";
import { Disclosure, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { isBlackBackgroundAtom } from "../atoms";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";

interface DropdownInfoProps {
    text: string,
    details: string,
    index: number
}

function DropdownInfo(props: DropdownInfoProps) {
    const [detailsOpen, setdetailsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            variants={{
                "visible": { opacity: 1, y: 0 },
                "hidden": { opacity: 0, y: 20 },
            }}
            transition={{ duration: 1, delay: (props.index + 1) * 0.2 }}
            whileInView={"visible"}
            className="flex flex-col justify-start items-start gap-3 w-full md:w-96 mb-6 md:mb-12">
            <button onClick={() => { setdetailsOpen(!detailsOpen) }} className="flex flex-row justify-center items-center gap-3">
                <div className="text-2xl md:text-3xl font-regular">
                    {props.text}
                </div>
                <MdArrowDropDown size={20} className="" />
            </button>


            <AnimatePresence>
                {
                    detailsOpen &&
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4,ease:"easeInOut" }}
                        className="text-tan/70 text-md md:text-xl flex flex-wrap justify-start items-start gap-[4px] md:gap-[5px] w-full md:w-96">
                        {
                            props.details.split(" ").map((word, index) => {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ delay: (index + 1) * 0.01, duration: 0.1 }}
                                    >
                                        {word}
                                    </motion.div>
                                )
                            })
                        }
                    </motion.div>
                }
            </AnimatePresence>

        </motion.div>
    )
}


function Whatwedo() {

    const [isBlackBg, setisBlackBg] = useRecoilState(isBlackBackgroundAtom);
    const { ref, inView, entry } = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setisBlackBg(true);
        }
        else {
            setisBlackBg(false);
        }
    }, [inView]);

    return (

        <div className="flex justify-center items-center w-full h-full bg-black text-tan/80">
            <div className="flex flex-col md:flex-row justify-center items-start w-[80%] md:gap-0 gap-12 md:w-[60%] h-full py-24 md:py-72">

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
                            className="text-5xl md:text-6xl font-semibold">What we do.</motion.div>
                        <motion.div
                            initial="hidden"
                            variants={{
                                "visible": { opacity: 1, y: 0 },
                                "hidden": { opacity: 0, y: 20 },
                            }}
                            transition={{ duration: 1, delay: 0.5 }}
                            whileInView={"visible"}
                            className="text-xl md:text-2xl font-regular mt-8 md:mt-16">We create world class products and experiences that stay with your customers.</motion.div>
                    </div>

                </div>



                <div className="flex flex-col w-full h-full justify-start md:justify-center items-start md:items-end font-regular md:font-light">

                    <div ref={ref} className="flex flex-col justify-start items-start font-regular md:font-light mt-12 md:mt-0">
                        <DropdownInfo index={0} text="Strategy" details="We start each new digital product design partnership with an in depth discovery phase to immerse ourselves in your business. Our UX designers interview stakeholders, conduct user research, analyze your competition, and consolidate content. The result is an action plan on executing a holistic brand and user experience." />
                        <DropdownInfo index={1} text="Design" details="UI/UX design is a defining factor for any digital product these days. We're a user experience and UI design agency focused on improving conversion and increasing customer engagement. Our UI/UX design capabilities don't stop at mobile apps, web applications, or multi‑platform digital experiences. As a UX design agency, we create products and services that provide outstanding usability while fully embracing your brand's personality" />
                        <DropdownInfo index={2} text="Branding" details="A brand today is all about how it makes your customers feel. It's not a logo, visual identity, or digital product design. but rather a cohesive system that spans across all mediums and touchpoints. We're a branding agency offering a complete solution from naming and logo design to communications and style guides." />
                        <DropdownInfo index={3} text="Web Development" details="We're a web design agency creating next‑level websites by strategically blending user experience and brand storytelling. Our web designers and developers create responsive websites that feel at home on any device. Product landing pages, marketing sites, or UX UI for company intranet portals – we do it all." />
                        {/* <div ref={ref} className="h-2 bg-tan w-96"></div> */}
                    </div>
                </div>




            </div>
        </div>
    );
}

export default Whatwedo;