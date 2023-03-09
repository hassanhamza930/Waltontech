import { useState } from "react";
import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";


interface HeaderProps{
    sideBarOpen:boolean,
    setSideBarOpen:Function
}

function Header(props:HeaderProps) {


    return (
        <div style={{ fontFamily: "IBM Plex Sans" }} className="fixed z-50 w-full h-16 bg-blue text-tan shadow-md flex flex-row justify-between items-center px-3 md:px-10">

            <img className="w-24 md:w-36 -mb-1" src={logo}></img>

            <div className="hidden md:flex font-light flex-row justify-center items-center gap-12">
                <button onClick={()=>{
                    var el=document.getElementById("whatwedo");
                    el?.scrollIntoView({behavior:"smooth"})
                }} className="link-underline">What we do</button>
                <button className="link-underline">Stories</button>
                <button className="link-underline">Pricing</button>
                <button className="link-underline">Contact us</button>
            </div>

            <div className="md:hidden flex relative">
                {
                   
                    <button onClick={()=>{props.setSideBarOpen(!props.sideBarOpen)}}>
                        <GiHamburgerMenu className="text-tan/90 h-6 w-6"></GiHamburgerMenu>
                    </button>

                }
            </div>

        </div>
    );
}

export default Header;