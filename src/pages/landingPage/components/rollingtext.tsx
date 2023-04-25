import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


function RollingText() {

    const [selectedWordIndex, setselectedWordIndex] = useState(0);

    var line = "for the startup";

    // function tick() {
    //     setTimeout(() => {
    //         if (selectedWordIndex == (words.length - 1)) {
    //             setselectedWordIndex(0);
    //         }
    //         else {
    //             setselectedWordIndex(selectedWordIndex + 1);
    //         }
    //     }, 4000);
    // }

    useEffect(() => {
        // tick();
    }, [selectedWordIndex])



    return (
        <AnimatePresence>
            <motion.div
                intial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                style={{ fontFamily: "Crimson Pro", }} className="italic relative text-3xl md:text-4xl font-medium bg-tan flex flex-wrap gap-3 text-purp px-4 py-2 h-14 justify-center items-center ">
                {
                    line.split(" ").map((word, index) => {
                        return (
                            <AnimatePresence key={index}>
                                <motion.div className="relative" key={index} initial={{ opacity: 0, y: 50 * (index + 1), rotateX: 30 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.3 * (index + 1) }} >
                                    {word}
                                </motion.div>
                            </AnimatePresence>
                        )
                    })
                }
            </motion.div>
        </AnimatePresence>
    );
}

export default RollingText;