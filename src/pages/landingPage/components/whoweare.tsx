import WhoWeAreBg from "../../../images/whowearebg.svg";


function WhoWeAre() {
    return (

        <div id="whoweare" className=" bg-blue/90 relative z-20 flex flex-col h-full justify-center items-center w-full">
            <div style={{ backgroundImage: (`url('${WhoWeAreBg}')`), backgroundSize: "300px" }} className="bg-blue bg-contain bg-blend-lighten bg-right-top flex bg-no-repeat flex-col h-full justify-center items-center w-full py-0 md:py-10">
                <div className="w-full xl:w-[60%] bg-blue/70 md:bg-transparent rounded-sm flex flex-col justify-start items-start p-6 md:p-10 gap-4">

                    <div className="flex flex-row justify-center items-center gap-4">
                        <div className="w-12 h-[3px] rounded-full bg-tan/90"></div>
                        <div className="text-sm font-regular text-tan/90">Who we are</div>
                    </div>

                    <div className="flex justify-start items-start flex-col gap-5">
                        <div className="text-4xl md:text-5xl font-bold text-tan/90">We are a team of passionate developers and designers from Pakistan.</div>
                        <div className="text-md font-regular text-tan/90">
                        Our team comprises of talented professionals with expertise in various domains including design, development, and project management. They work together to create customized software solutions that are visually appealing, user-friendly, and meet the needs of their clients. They are committed to providing excellent customer service, building lasting relationships with clients, staying up-to-date with the latest industry trends and technologies, and continuously improving their skills.                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default WhoWeAre;