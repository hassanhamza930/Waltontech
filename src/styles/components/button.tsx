interface ButtonInputs{
    text:string,
    onClick:Function,
    customStyles?:string
}


function Button(props:ButtonInputs) {
    return (  
        <button style={{fontFamily:"IBM Plex Sans"}} onClick={()=>{props.onClick()}} className={`${props.customStyles} px-6 rounded-sm py-[5px] hover:text-black hover:scale-[1.02] hover:bg-[#F7C04A] hover:shadow-2xl text-blue bg-white font-medium`}>
            {props.text}
        </button>
    );
}

export default Button;