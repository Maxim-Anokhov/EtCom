import React from "react";
import Header from "./Header";
import SiteBar from "./SiteBar";
import { Link } from "react-router-dom";

import "./Catalog.css";
export const Catalog=()=>{
    return(
        <div className="Catalog">
        <Header/>
        <SiteBar/>
        <div className="catalog_menu">

        <Link to="/CollapsibleCoolers" className="blocks_menu collapsible_coolers">РАЗБОРНЫЕ ТЕПЛООБМЕННИКИ</Link>
        <Link to="/SolderedCoolers" className="blocks_menu  soldered_coolers">  ПАЯНЫЕ ТЕПЛООБМЕННИКИ </Link>
        </div>
        </div>
    )
}