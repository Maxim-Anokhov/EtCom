import React from "react";
import  "./SolderedCoolers.css"
import { HeaderPlusBar } from "./HeaderPlusBar";
import { SolderedCoolersItems } from "./SolderedCoolersItems";


export const SolderedCoolers=()=>{
return(
     <div className="SolderedCoolers " >
<HeaderPlusBar></HeaderPlusBar>

<div className="SolderedCoolersWrap">
    <SolderedCoolersItems/>
</div>
    </div>)

}