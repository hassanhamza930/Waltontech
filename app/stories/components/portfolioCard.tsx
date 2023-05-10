"use client";

import Button from "@/styles/components/button";
import transformationlabs from "../../../images/transformationlabs.png";

function PortfolioCard() {
    return (
        <div className="h-screen w-full flex flex-col-reverse md:flex-row justify-center items-center" >
            <div style={{backgroundImage:`url('${transformationlabs.src}')`}} className="w-full md:w-2/4 bg-blue h-full bg-cover bg-left flex justify-center items-center">

            </div>

            <div className="w-full md:w-2/4 bg-purp h-full flex flex-col justify-center items-center p-10 text-tan/90">
                <div className="text-3xl text-center md:text-6xl font-semibold">Transformation Labs</div>
                <div className="text-sm md:text-md text-center font-regular mt-2 md:mt-4 mb-16">
                    UI revamp and Landing page for a product management consulting company.
                </div>
                <Button text="Hear the story" onClick={()=>{}} />
            </div>



        </div>
    );
}

export default PortfolioCard;