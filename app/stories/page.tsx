"use client";

import storiesbg from "../../images/storiesbg.svg";
import Button from "../../styles/components/button";
import cncardbg from "../../images/cncardbg.svg";
import wavecardbg from "../../images/wavecardbg.svg";
import colonstechcardbg from "../../images/colonstechcardbg.svg";
import stardomcardbg from "../../images/stardomcardbg.svg";
import teldacardbg from "../../images/teldacardbg.svg";
import { useRouter } from "next/navigation";
import PortfolioCard from "./components/portfolioCard";


function Stories() {

    return (
        <div className="tracking-normal bg-blue h-full w-full flex flex-col justify-center items-center bg-right-top bg-contain bg-no-repeat">

            <div style={{ backgroundImage: `url('${storiesbg.src}')` }} className="tracking-wide bg-black h-full w-full flex flex-col justify-center items-center bg-right-top bg-contain bg-no-repeat">

                <div className="p-10 bg-gradient-to-br from-blue via-blue to-blue/70 backdrop-blur-sm md:backdrop-blur-none h-screen w-full flex justify-center items-center">

                    <div className="w-full md:w-[60%] flex justify-start items-start flex-col gap-4">

                        <div className="text-4xl md:text-5xl font-bold text-tan w-full">
                            Customer Success Stories
                        </div>

                        <div className="text-sm md:text-xl font-light text-tan w-full mb-10">
                            See how we delivered value to our clients.
                        </div>

                        <Button text="Explore" customStyles="mt-5" onClick={() => {
                            var el = document.getElementById("ourclients");
                            el?.scrollIntoView({ behavior: "smooth" })
                        }} />

                    </div>

                </div>
            </div>



            <div id="ourclients" className="flex flex-col w-full justify-center items-center">
                <PortfolioCard />
            </div>







        </div>
    );
}

export default Stories;