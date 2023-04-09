import React from "react";
import "./SiteBar.css";
import {Link} from 'react-router-dom'
// import "./VisitCard.css"
function SiteBar(){
    return(
        <div className="Site_bar">
            <Link to="/VisitCard" className="link">O КОМПАНИИ</Link>
             <Link to="/Catalog" className="link">КАТАЛОГ ПРОДУКЦИ</Link>         
            <a href="#" className="link">ПРЕИМУЩЕСТВА ЭтКом</a>
            <a href="#" className="link">РАСЧЕТ ТЕПЛООБМЕННИКА</a>
            <a href="#" className="link">ФОТОГАЛЕРЕЯ</a>
            <a href="#" className="link">КОНТАКТЫ</a>
        </div>
    )
}
export default SiteBar