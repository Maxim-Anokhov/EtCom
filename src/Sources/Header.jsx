import React from "react";
import "./Header.css";
import logo from "./Images/Logo_EtCom.png"
import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="Header">
            {/* <img className="logo" src="https://www.kaori.com.tw/ru/themes/CADCH_00023C/images/logo.svg" alt="" /> */}
           <Link to="/EtCom">

           <img className="logo" src={logo} alt="" />
           </Link> 
            <p className="head_description">ПОДБОР, ПОСТАВКА И ОБСЛУЖИВАНИЕ ТЕПЛООБМЕННОГО ОБОРУДОВАНИЯ  В РОССИИ</p>
            <p className="mail" href="etkomsib@yandex.ru">email: etkomsib@yandex.ru 
            <img className="envelop" src="https://w7.pngwing.com/pngs/340/41/png-transparent-envelope-mail-icon-miscellaneous-angle-text.png"/>
            </p>
            <form className="searching" action="">
                <input className="input_form" type="text" />
                <button className="button_form  "><img  className="glass" src="https://www.clipartmax.com/png/full/127-1270647_focus-versus-distraction-icon-standortsuche.png" alt="" /></button> 
            </form>
            <p className="phone">8(383)34-798-33 <img className="phone" src="" alt="" /></p>
        </div>
    )
}
export default Header