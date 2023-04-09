import React from "react";
import Header from "./Header";
import SiteBar from "./SiteBar";
import "./Catalog.css";
export const Catalog=()=>{
    return(
        <div className="Catalog">
        <Header/>
        <SiteBar/>
        <div className="catalog_menu">

        <div className="blocks_menu soldered_coolers">ПАЯНЫЕ ТЕПЛООБМЕННИКИ</div>
        <div className="blocks_menu collapsible_coolers">РАЗБОРНЫЕ ТЕПЛООБМЕННИКИ</div>
        </div>
        </div>
    )
}