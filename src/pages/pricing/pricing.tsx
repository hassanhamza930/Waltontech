import Button from "../../styles/components/button";

function Pricing() {
    return ( 
        <div style={{ fontFamily: "IBM Plex Sans" }} className="tracking-normal bg-blue h-full w-full flex flex-col justify-center items-center bg-right-top bg-contain bg-no-repeat">

            <div style={{ fontFamily: "IBM Plex Sans" }} className="tracking-wide bg-black h-full w-full flex flex-col justify-center items-center bg-right-top bg-contain bg-no-repeat">

                <div className="p-10 bg-gradient-to-br from-blue via-blue to-blue/70 backdrop-blur-sm md:backdrop-blur-none h-screen md:h-[700px] w-full flex justify-center items-center">

                    <div className="w-full md:w-[60%] flex justify-start items-start flex-col gap-4">

                        <div className="text-4xl md:text-5xl font-bold text-tan w-full">
                            On a budget?
                        </div>

                        <div className="text-sm md:text-xl font-light text-tan w-full">
                            While every project is different,<br/> We can give you an idea of how much it would cost to make your launch your app with us.
                        </div>

                        <Button text="Explore" customStyles="mt-5" onClick={() => {
                             var el = document.getElementById("ourclients");
                             el?.scrollIntoView({ behavior: "smooth" })
                         }} />

                    </div>

                </div>
            </div>




            <div className="flex flex-col justify-center items-center h-full w-full bg-black/80 ">

                <div className="w-full xl:w-[60%] backdrop-blur-md rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4 my-10">

                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="w-12 h-[3px] rounded-full bg-tan/90"></div>
                        <div className="text-sm font-regular text-tan/90">Our Clients</div>
                    </div>




                </div>


            </div>


        </div>
     );
}

export default Pricing;