import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import hamza from "../../images/hamza.svg";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Button from "@/styles/components/button";

function Contact() {


    const [showContactInfo, setshowContactInfo] = useState(false);

    return (
        <div id="contact" className=" bg-blue/90 relative z-20 flex flex-col h-full justify-center items-center w-full">
            <div className="bg-blue bg-contain bg-blend-lighten bg-right-top flex bg-no-repeat flex-col h-full justify-center items-center w-full py-0 md:py-10">
                <div className="w-full xl:w-[70%] bg-blue/70 md:bg-transparent rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4 mb-36">

                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="w-12 h-[3px] rounded-full bg-tan/90"></div>
                        <div className="text-sm font-regular text-tan/90">Talk to us</div>
                    </div>

                    <div className="flex justify-start items-start flex-col gap-5">
                        <div className="text-4xl md:text-5xl font-bold text-tan/90">Whatever you are trying to build, We can help you figure things out.</div>


                        <div className="flex w-full flex-col md:flex-row-reverse justify-start items-start gap-6 mt-4">

                            <div style={{ backgroundImage: `url('${hamza.src}')` }} className=" h-36 md:h-64 w-36 md:w-64 bg-no-repeat bg-left bg-contain mt-3 flex flex-col justify-end items-start p-3 md:p-5">
                                
                                <div className="md:flex hidden text-2xl font-regular text-tan/90">Hamza Hassan</div>
                                <div className="md:flex hidden text-sm md:text-md font-regular text-tan/90">Business Development Lead</div>

                            </div>

                            <div className="text-md font-regular text-tan/90 flex-1 flex-col justify-start items-start gap-2">
                                <div className="text-3xl font-regular text-tan/90">
                                    Hello there!
                                </div>
                                <div className="mt-4">
                                    My name is Hamza and I'm excited to hear from you.

                                    As a partner at Waltontech,<br /> I have a passion for technology and a dedication to delivering high-quality solutions.<br /><br />

                                    When you contact me, you'll be met by a real person who is ready to listen to your ideas, answer your questions, and provide expert guidance.<br /><br />

                                    Let's discuss your project and explore how we can work together to bring your vision to life.
                                </div>


                            </div>

                        </div>

                        <div className="relative w-full flex justify-start items-start">
                            <AnimatePresence>
                                {
                                    showContactInfo == false &&
                                    <motion.div className="absolute mt-5" exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                                        <Button text={"Contact me"} onClick={() => {
                                            setshowContactInfo(true);
                                            window.open("mailto:hamza@waltontech.co");
                                        }} />
                                    </motion.div>
                                }

                            </AnimatePresence>
                            <AnimatePresence>
                                {
                                    showContactInfo == true &&
                                    <motion.div className=" text-md rounded-sm absolute flex flex-col justify-start items-start gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.2 }}>
                                        <button onClick={() => {
                                            window.open("mailto:hamza@waltontech.co");
                                        }} className="flex flex-row justify-center items-center gap-2">
                                            <AiOutlineMail className="text-tan/90" />
                                            <div className="text-md font-regular text-tan/90 -mt-[2px]">hamza@waltontech.co</div>
                                        </button>
                                        <button onClick={() => { window.open("tel:+923174631189"); }} className="flex flex-row justify-center items-center gap-2">
                                            <AiOutlinePhone className="text-tan/90" />
                                            <div className="text-md font-regular text-tan/90 -mt-[2px]">+923174631189</div>
                                        </button>

                                    </motion.div>
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;