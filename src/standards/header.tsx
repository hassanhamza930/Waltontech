import logo from "../images/logo.svg";

function Header() {
    return ( 
        <div style={{fontFamily:"IBM Plex Sans"}} className="fixed z-50 w-full h-16 bg-blue text-tan shadow-md flex flex-row justify-between items-center px-10">
           
            <img className="w-36 -mb-1" src={logo}></img>

            <div className="font-light flex flex-row justify-center items-center gap-12">
                <button className="link-underline">What we do</button>
                <button className="link-underline">Stories</button>
                <button className="link-underline">Pricing</button>
                <button className="link-underline">Contact us</button>
            </div>

        </div>
     );
}

export default Header;