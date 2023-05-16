"use client";

import { MdArrowDropDown } from "react-icons/md";
import { Disclosure, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { isBlackBackgroundAtom } from "../atoms";
import { useInView } from "react-intersection-observer";
import { useRecoilState } from "recoil";

interface DropdownInfoProps {
    text: string,
    details: string,
    index:number
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
            transition={{ duration: 1, delay: (props.index+1)*0.2 }}
            whileInView={"visible"}
            className="flex flex-col justify-start items-start gap-3 w-[80%] md:w-96 mb-6 md:mb-12">
            <button onClick={() => { setdetailsOpen(!detailsOpen) }} className="flex flex-row justify-center items-center gap-5">
                <div className="text-2xl md:text-4xl">{props.text}</div>
                <MdArrowDropDown size={20} className="" />
            </button>


            <AnimatePresence>
                {
                    detailsOpen &&
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-tan/70 text-md flex">
                        {props.details}
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
        if(inView){
            setisBlackBg(true);
        }
        else{
            setisBlackBg(false);
        }
    },[inView]);

    return (
        <div className="h-full w-full bg-black text-tan/90 py-24  md:py-72 flex justify-center items-center">

            <div className="flex flex-col md:flex-row justify-start md:justify-between items-center md:items-start w-full md:w-[60%] h-full">

                <div  className="flex flex-col justify-start items-start w-[80%]  md:w-full">
                    <motion.div
                        initial="hidden"
                        variants={{
                            "visible": { opacity: 1, y: 0 },
                            "hidden": { opacity: 0, y: 20 },
                        }}
                        transition={{ duration: 1, delay: 0.3 }}
                        whileInView={"visible"}
                        className="text-4xl md:text-5xl font-semibold">What we do.</motion.div>
                    <motion.div
                        initial="hidden"
                        variants={{
                            "visible": { opacity: 1, y: 0 },
                            "hidden": { opacity: 0, y: 20 },
                        }}
                        transition={{ duration: 1, delay: 0.5 }}
                        whileInView={"visible"}
                        className="text-xl md:text-2xl font-regular mt-8 md:mt-16">We create world class products & experiences <br />that stay with your customers.</motion.div>
                </div>

                <div ref={ref} className="flex flex-col w-full md:w-min justify-start items-center md:items-start font-regular md:font-light mt-12 md:mt-0">
                    <DropdownInfo index={0} text="Strategy" details="This is a testing text and might grow in the future so for now we are just using this as a placeholder." />
                    <DropdownInfo index={1} text="Design" details="This is a testing text and might grow in the future so for now we are just using this as a placeholder." />
                    <DropdownInfo index={2} text="Branding" details="This is a testing text and might grow in the future so for now we are just using this as a placeholder." />
                    <DropdownInfo index={3} text="Web Development" details="This is a testing text and might grow in the future so for now we are just using this as a placeholder." />
                    {/* <div ref={ref} className="h-2 bg-tan w-96"></div> */}
                </div>


            </div>

        </div>
    );
}

export default Whatwedo;