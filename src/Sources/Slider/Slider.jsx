import React, { useState, useEffect, Children,cloneElement}from "react";





export const Slider=({children})=>{
    const[offset,setOffset]=useState(0)
    
//   useEffect(()=>{
//     const interval=setInterval(()=>{ setOffset(()=>{
// let newOffset=offset-100;
// if(newOffset===-300){setOffset(0)}
// return newOffset
//         }
//     )},5000)
//     return ()=> clearInterval()
//   })
    
   
    return(
<div className="slider" style={{transform:`translateX(${offset}%)`}}>{children}</div>

    )
}