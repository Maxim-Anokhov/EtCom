import React from "react";
import "./HeaderPlusBar.css";
import Header from "./Header";
import SideBar from "./SideBar";
export const HeaderPlusBar=()=>{
    return (
        <div className="HeaderPlusBar">
            <Header></Header>
            <SideBar></SideBar>
        </div>
    )
}