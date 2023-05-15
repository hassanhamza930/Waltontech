"use client";

import { useState } from "react";
import logo from "../../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context";

interface HeaderProps {
    sideBarOpen: boolean,
    setSideBarOpen: Function
}



function Header(props: HeaderProps) {

    const router = useRouter();
    const pathname = usePathname();

    if (pathname != "/design") {
        return (
            <>
                <div className="md:hidden flex relative">
                    <AnimatePresence>
                        {
                            props.sideBarOpen == true &&
                            <motion.div
                                initial={{ scale: 0, x: 100, y: -100 }}
                                animate={{ scale: 3.5, x: 0, y: 0 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 0.5 }}
                                className="fixed z-50 h-[500px] w-[500px] rounded-full text-tan bg-black/90">
                            </motion.div>
                        }
                        {
                            props.sideBarOpen == true &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="fixed z-50 h-screen w-full text-tan bg-black/90 flex flex-col justify-start items-end pt-20 px-5 gap-4">
                                <button onClick={() => {
                                    props.setSideBarOpen(false);
                                    router.push("/", { forceOptimisticNavigation: true } as NavigateOptions);
                                    setTimeout(() => {
                                        var el = document.getElementById("whatwedo");
                                        el?.scrollIntoView({ behavior: "smooth" });
                                    }, 1000);
                                }} className="link-underline">What we do</button>
                                <button className="link-underline" onClick={() => { router.push("/stories", { forceOptimisticNavigation: true } as NavigateOptions); props.setSideBarOpen(false); }}>Stories</button>
                                <button className="link-underline">Pricing</button>
                                <button onClick={() => {
                                    props.setSideBarOpen(false);
                                    router.push("/", { forceOptimisticNavigation: true } as NavigateOptions);
                                    setTimeout(() => {
                                        var el = document.getElementById("contact");
                                        el?.scrollIntoView({ behavior: "smooth" })
                                    }, 1000);
                                }} className="link-underline">Contact us</button>
                            </motion.div>

                        }
                    </AnimatePresence>

                </div>
                <div className="fixed z-50 w-full h-16 bg-blue text-tan shadow-md flex flex-row justify-between items-center px-3 md:px-10">

                    <button onClick={() => { router.push("/", { forceOptimisticNavigation: true } as NavigateOptions) }} className="outline-none">
                        {/* <img className="w-24 md:w-36 -mb-1" src={logo}></img> */}
                        <Image
                            src={logo}
                            className="w-24 md:w-36 -mb-1"
                            alt="Waltontech.co logo"
                        />
                    </button>

                    <div className="hidden md:flex font-light flex-row justify-center items-center gap-12">

                        <button onClick={async () => {
                            if (pathname == "/") { }
                            else {
                                router.push("/", { forceOptimisticNavigation: true } as NavigateOptions);
                            }
                            setTimeout(() => {
                                var el = document.getElementById("whatwedo");
                                el?.scrollIntoView({ behavior: "smooth" })
                            }, 700);
                        }} className="link-underline">What we do</button>


                        <button onClick={() => {

                            router.push("/design", { forceOptimisticNavigation: true } as NavigateOptions);

                        }} className="link-underline">Design</button>

                        <button className="link-underline" onClick={() => {
                            router.push("/stories", { forceOptimisticNavigation: true } as NavigateOptions)
                        }} >Stories</button>

                        <button
                            onClick={() => {
                                router.push("/pricing");
                                // setTimeout(() => {
                                //     var el = document.getElementById("contact");
                                //     el?.scrollIntoView({ behavior: "smooth" })
                                // }, 300);

                            }}
                            className="link-underline">Pricing</button>

                        <button onClick={() => {
                            if (pathname == "/") { }
                            else {
                                router.push("/", { forceOptimisticNavigation: true } as NavigateOptions);
                            }

                            setTimeout(() => {
                                var el = document.getElementById("contact");
                                el?.scrollIntoView({ behavior: "smooth" })
                            }, 700);

                        }} className="link-underline">Contact us</button>

                    </div>

                    <div className="md:hidden flex relative">
                        {

                            <button onClick={() => { props.setSideBarOpen(!props.sideBarOpen) }}>
                                <GiHamburgerMenu className="text-tan/90 h-6 w-6"></GiHamburgerMenu>
                            </button>

                        }
                    </div>

                </div>
            </>
        );
    }
    else {
        return <></>
    }
}

export default Header;