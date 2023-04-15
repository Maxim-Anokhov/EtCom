import React from "react";
import  "./SolderedCoolers.css"
import Header from "./Header";
import SiteBar from "./SiteBar";
import { SolderedCoolersItems } from "./SolderedCoolersItems";


export const SolderedCoolers=()=>{
return(
     <div className="SolderedCoolers " >
<Header></Header>
<SiteBar></SiteBar>

<div className="SolderedCoolersWrap">
    <SolderedCoolersItems/>
</div>
    </div>)

}