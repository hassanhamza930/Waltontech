"use client";

import { motion } from "framer-motion";


function Hero() {
    return (
        <div className="bg-tan flex h-full w-full justify-center items-center">
            <div className="h-full flex flex-col justify-start w-full items-center pt-96 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
                    className="text-3xl md:text-5xl font-light w-4/5 md:w-[60%]">We are a full stack UI/UX design agency <br />in the heart of Pakistan.</motion.div>

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