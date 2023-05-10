"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


function RollingText() {

    const [selectedWordIndex, setselectedWordIndex] = useState(0);

    const words = ["Design", "Collaboration", "Software", "Innovation"]

    function tick() {
        setTimeout(() => {
            if (selectedWordIndex == (words.length - 1)) {
                setselectedWordIndex(0);
            }
            else {
                setselectedWordIndex(selectedWordIndex + 1);
            }
        }, 4000);
    }

    useEffect(() => {
        tick();
    }, [selectedWordIndex])



    return (
        <div className="relative text-4xl md:text-5xl font-bold text-tan h-16 ">
            {
                words.map((word, index) => {
                    return (
                        <AnimatePresence  key={index}>
                            {
                                selectedWordIndex == index &&
                                    <motion.div className="absolute" key={index} initial={{ opacity: 0,y:50,rotateX:30 }} animate={{ opacity: 1,y:0,rotateX:0 }} exit={{ opacity: 0,y:-50,rotateX:-30 }} transition={{ duration: 0.8 }} >
                                        {word}
                                    </motion.div>
                            }
                        </AnimatePresence>
                    )
                })
            }
        </div>
    );
}

export default RollingText;