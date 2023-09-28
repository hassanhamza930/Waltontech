"use client";

import { useRecoilState } from "recoil";
import { isBlackBackgroundAtom } from "../atoms";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Contact() {
    const [isBlackBg, setisBlackBg] = useRecoilState(isBlackBackgroundAtom);
    const { ref, inView, entry } = useInView({
        threshold: 0.1,
    });
    const description = "My name is Hamza. <br/> When you contact me, you'll be met by a real person! not an autoreply bot. As a partner at Waltontech, i'm passionate about understanding your unique business proposition and providing expert guidance on how we can take your solution to market. <br/> <br/> I'm excited to hear from you, let's discuss whatever you have in mind on a free consultation call 🙂"

    useEffect(() => {
        if (inView) {
            setisBlackBg(true);
        }
        else {
            setisBlackBg(false);
        }
    }, [inView]);

    return (
        <div className="flex justify-center items-center h-full w-full bg-black text-tan/90 py-36">
            <div id="contact" ref={ref} className="h-full w-[80%] md:w-[60%] flex flex-col gap-10 md:gap-14 justify-start items-start">

                <motion.div
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 40 },
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                    whileInView={"visible"}
                    className="text-5xl md:text-6xl font-semibold text-left tracking-tight">Hey there 👋</motion.div>


                <motion.div
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileInView={"visible"}
                    className="text-md md:text-2xl font-light text-center w-full flex flex-wrap justify-start items-start gap-[4px] md:gap-[5px]">
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




                <motion.button
                    onClick={() => {
                        window.open("mailto:hassanhamza930@gmail.com");
                    }}
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileInView={"visible"}
                    className="text-md md:text-xl font-regular flex justify-center items-center px-12 py-2 rounded-md hover:scale-[1.02] hover:shadow-xl hover:bg-blue/90 hover:text-tan bg-transparent text-tan border-[1px] hover:border-blue/90 border-tan mt-5 md:mt-10">Contact Me</motion.button>

                <motion.div
                    initial="hidden"
                    variants={{
                        "visible": { opacity: 1, y: 0 },
                        "hidden": { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileInView={"visible"}
                    className="text-xl md:text-2xl font-regular flex justify-center items-center text-tan     mb-36">hassanhamza930@gmail.com</motion.div>



            </div>
        </div>
    );
}

export default Contact;