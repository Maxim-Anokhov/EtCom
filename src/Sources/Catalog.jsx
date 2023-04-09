import React from "react";
import Header from "./Header";
import SiteBar from "./SiteBar";
import  kaory from "./Images/Kaory.png"
import "./Catalog.css";
export const Catalog=()=>{
    return(
        <div className="Catalog">
        <Header/>
        <SiteBar/>
        <div className="catalog_menu">

        <div className="blocks_menu ">
        <img src={kaory} className="soldered_coolers"/>
        ПАЯНЫЕ ТЕПЛООБМЕННИКИ
        </div>
        <div className="blocks_menu collapsible_coolers">РАЗБОРНЫЕ ТЕПЛООБМЕННИКИ</div>
        </div>
        </div>
    )
}