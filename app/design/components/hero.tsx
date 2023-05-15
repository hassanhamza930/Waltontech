import Image from "next/image";
import peter from "../../../images/design/peter.gif";

function Hero() {
    return (
        <div className="bg-tan flex h-full w-full justify-center items-center">
            <div className="h-full w-4/5 md:w-[60%] flex flex-col justify-start items-center py-64">
                <div className="text-3xl md:text-5xl font-light">We are a full stack UI/UX design agency <br/>in the heart of Pakistan.</div>
                
                <div 
                style={{backgroundImage:`url("https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`}} 
                className="mt-24 bg-cover bg-center bg-no-repeat h-screen w-full bg-black/90 rounded-xl">
                </div>


            </div>
        </div>
      );
}

export default Hero;