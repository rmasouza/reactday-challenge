import React from "react";
import classes from './CurrentCity.module.scss'
import {formatDate} from "../../../utils/formatter";
import LocationIcon from "../../Icon/LocationIcon";

const CurrentCity = (props) => {
    const {city, curreDate, ...other} = props
    return (
        <section className={classes.CurrentCity} {...other}>
            <LocationIcon className={classes.Icon}/>
            <h3 className={classes.City}>{city}</h3>
            <p className={classes.Date}>{formatDate(curreDate)}</p>
        </section>
    )
}

export default  CurrentCity
