import React from "react";
import  {coolers} from "./Data.js";

export const SolderedCoolersItems=()=>{
    return(

        coolers.map((item)=><div key={item.id} style={{backgroundImage:`url(${item.image})`} }  className="cooler">
            {item.series}
        </div> )
    
    )
}