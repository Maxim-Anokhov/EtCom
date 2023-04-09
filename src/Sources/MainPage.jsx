import React from "react";
import Header from "./Header";
import SiteBar from "./SiteBar";

import  "./MainPage.css";
import Banner from "./Banner";
function MainPage(){
    return(
        <div className="main_page">
            <Header/>
            <SiteBar/>
            <Banner/>
            <footer className="footer"></footer>
            
        </div>
    )
}
export default MainPage;