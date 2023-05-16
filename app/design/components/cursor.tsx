"use client";

import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion";


interface MousePosition {
    x: number;
    y: number;
}



export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
      const mouseMoveHandler = (event:MouseEvent) => {
        const { clientX, clientY } = event;
        setMousePosition({ x: clientX, y: clientY });
      };
      document.addEventListener("mousemove", mouseMoveHandler);
  
      return () => {
        document.removeEventListener("mousemove", mouseMoveHandler);
      };
    }, []);
  
    return mousePosition;
  }




export default function CustomCursor() {

    const { x, y } = useMousePosition();

    useEffect(() => {
       
    }, [])


    return (
        <div
        className='hidden md:flex dot backdrop-invert bg-transparent h-6 w-6'
        style={{
            left: `${x}px` ,
            top: `${y}px` ,
        }}
    />
    )
}