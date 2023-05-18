"use client";

import { useRecoilState } from "recoil";
import { isBlackBackgroundAtom } from "../atoms";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function DesignIsCore() {
    const [isBlackBg, setisBlackBg] = useRecoilState(isBlackBackgroundAtom);
    const { ref, inView, entry } = useInView({
        threshold: 0.1,
    });
    const description = "Customers today expect more than just a functional digital product, they want a memorable and engaging experience that keeps them coming back for more. <br/> <br/> That's where we come in! We understand that businesses today need to stand out from the crowd and we're here to help you do just that.    "

    useEffect(() => {
        if (inView) {
            setisBlackBg(true);
        }
        else {
            setisBlackBg(false);
        }
    }, [inView]);

    return (
        <div className="flex justify-center items-center h-full w-full bg-black text-tan/90 py-64">
            <div className="h-full w-[80%] flex flex-col gap-10 md:gap-14 justify-start items-center">

                <motion.div
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 40 },
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileInView={"visible"}
                    className="text-5xl md:text-7xl font-semibold text-center tracking-tight">We believe design is core,<br />Not a layer on top.</motion.div>


                <motion.div
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileInView={"visible"}
                    className="text-md md:text-2xl font-light text-center w-full md:w-[50%] flex flex-wrap justify-center items-center gap-[4px] md:gap-[5px]">
                    {
                        description.split(" ").map((word, index) => {
                            if (word == "<br/>") {
                                return (
                                    <div className="w-full h-[3px] bg-transparent"></div>
                                )
                            }
                            else {
                                return (
                                    <motion.div
                                        initial="hidden"
                                        variants={{
                                            "visible": { opacity: 1, y: 0 },
                                            "hidden": { opacity: 0, y: 20 },
                                        }}
                                        transition={{ duration: 0.2, delay: (index + 1) * 0.05 }}
                                        whileInView={"visible"}
                                    >
                                        {word}
                                    </motion.div>
                                )
                            }
                        })
                    }
                </motion.div>


                <div ref={ref} className="relative w-full h-full flex flex-col justify-center items-center">
                    <div className="h-36 md:h-96 w-36 md:w-96 relative flex justify-center items-center">
                        <motion.div
                            initial="hidden"
                            variants={{
                                "visible": { opacity: 1, y: 0 },
                                "hidden": { opacity: 0, y: 20 },
                            }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileInView={"visible"}
                            className="h-48 md:h-96 w-48 md:w-96 bg-tan rounded-md absolute z-20 -mb-12 md:-mb-24 -ml-36 md:-ml-72 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1655635949384-f737c5133dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')]"></motion.div>
                        <motion.div
                            initial="hidden"
                            variants={{
                                "visible": { opacity: 1, y: 0 },
                                "hidden": { opacity: 0, y: 20 },
                            }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            whileInView={"visible"}
                            className="h-48 md:h-96 w-48 md:w-96 bg-blue rounded-md absolute z-10 -mb-24 md:-mb-52 -mr-36 md:-mr-72 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1580610447943-1bfbef5efe07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]"></motion.div>
                    </div>
                </div>

                <motion.button 
                initial="hidden"
                variants={{
                    "visible": { opacity: 1, y: 0 },
                    "hidden": { opacity: 0, y: 20 },
                }}
                transition={{ duration: 1, delay: 0.3 }}
                whileInView={"visible"}
                className="text-md md:text-xl font-regular flex justify-center items-center px-12 py-2 rounded-md hover:scale-[1.02] hover:shadow-xl hover:bg-blue/90 hover:text-tan bg-transparent text-tan border-[1px] hover:border-blue/90 border-tan mt-24 md:mt-36">Let's get started!</motion.button>


            </div>
        </div>
    );
}

export default DesignIsCore;