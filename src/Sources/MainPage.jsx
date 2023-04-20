import React from "react";
import { HeaderPlusBar } from "./HeaderPlusBar";
import  "./MainPage.css";
import Banner from "./Banner";
function MainPage(){
    return(
        <div className="main_page">
           <HeaderPlusBar></HeaderPlusBar>
            <Banner/>
            <footer className="footer"></footer>
            
        </div>
    )
}
export default MainPage;