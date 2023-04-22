import React from "react";
import src_1 from "./Images/1.jpg"
import src_2 from "./Images/2.jpg"
import src_3 from "./Images/3.jpg"
const slides=[
    {id:'1',
    image:`https://www.reapterqd.com/uploadfiles/pictures/news/20200526061227_2174.jpg`,
    src:src_1
},

//     {id:'2',
//      image:`https://fotokonkurs.ru/cache/original/photos/2013/06/03/6/5f7082d7e8a6c4974dedeb126269ea87/cc219d3a0b33d8f64f1d7ce9e57abaee8cee6f90.jpg`,
//      src:src_2},
     
//     {id:'3',
//     image:`http://nskmi.ru/upload/iblock/f66/iNXnzgtsqmE.jpg`,
// src:src_3}
]



export const Slides=()=>{


    return(

        slides.map(item=> <div key={item.id} 
        style={{backgroundImage:`url(${item.image})`}} 
        className='slide'></div>)
        // slides.map(item=> <img className='slide' src={item.src}/>)
       
    )
}