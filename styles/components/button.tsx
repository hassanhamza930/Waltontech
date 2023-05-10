
interface ButtonInputs{
    text:string,
    onClick:Function,
    customStyles?:string
}


function Button(props:ButtonInputs) {
    return (  
        <button onClick={()=>{props.onClick()}} className="px-6 py-2 rounded-sm hover:scale-[1.02] hover:bg-tan hover:shadow-2xl text-tan text-sm hover:text-blue border-2 border-tan bg-transparent font-regular">
            {props.text}
        </button>
    );
}

export default Button;