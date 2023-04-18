import React from "react";
import { coolers } from "./Data.js";
import { Link } from "react-router-dom";
export const SolderedCoolersItems = () => {
    return (

        coolers.map((item) => <Link to="/" key={item.id} className="cooler" >
        <img alt="img" src={item.image}  className="cooler_img"/>
            <div className="description">
                <h2 className="description_series">{item.series}</h2>
                <h3 className="header_description" >{item.header_description}</h3>
                <p className="p_description">{item.description}</p>
            </div>
        </Link>

        )

    )
}