import { useState } from "react";
import logo from "../images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


interface HeaderProps {
    sideBarOpen: boolean,
    setSideBarOpen: Function
}

function Header(props: HeaderProps) {

    const navigate = useNavigate();

    return (
        <div style={{ fontFamily: "IBM Plex Sans" }} className="fixed z-50 w-full h-16 bg-blue text-tan shadow-md flex flex-row justify-between items-center px-3 md:px-10">

            <button onClick={() => { navigate("/") }} className="outline-none">
                <img className="w-24 md:w-36 -mb-1" src={logo}></img>
            </button>

            <div className="hidden md:flex font-light flex-row justify-center items-center gap-12">

                <button onClick={async () => {
                    navigate("/");
                    setTimeout(() => {
                        var el = document.getElementById("whatwedo");
                        el?.scrollIntoView({ behavior: "smooth" })
                    }, 300);
                }} className="link-underline">What we do</button>

                <button className="link-underline" onClick={() => {
                    navigate("/stories")
                }} >Stories</button>

                <button className="link-underline">Pricing</button>

                <button onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                        var el = document.getElementById("contact");
                        el?.scrollIntoView({ behavior: "smooth" })
                    }, 300);

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
    );
}

export default Header;