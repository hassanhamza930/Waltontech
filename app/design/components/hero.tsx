import Image from "next/image";
import peter from "../../../images/design/peter.gif";

function Hero() {
    return (
        <div className="bg-tan flex h-full w-full justify-center items-center">
            <div className="h-full w-4/5 md:w-[60%] flex flex-col justify-start items-center py-64">
                <div className="text-3xl md:text-5xl font-light">We are a full stack UI/UX design agency <br/>in the heart of Pakistan.</div>
                
                <div 
                style={{backgroundImage:`url("https://images.unsplash.com/photo-1625613931276-6d9535389055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60")`}} 
                className="mt-24 bg-cover bg-center bg-no-repeat h-screen w-full bg-black/90 rounded-xl">
                </div>


            </div>
        </div>
      );
}

export default Hero;