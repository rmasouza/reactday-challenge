import React from "react";
import classes from './MinMax.module.scss'

import MinIcon from "../../Icon/Min";
import MaxIcon from "../../Icon/Max";

import { ReactComponent as WhiteMin } from "../../../assets/icons/minima_b.svg";
import { ReactComponent as WhiteMax } from "../../../assets/icons/maxima_b.svg";

const MinMax = (props) => {
    const {city, curreDate, isHorizontal = true, ...other} = props
    return (
        <section className={isHorizontal ? classes.ManMax : classes.VerticalManMax} {...other} >
            {
                isHorizontal ? <MinIcon className={classes.Icon} style={{gridArea: 'min-icon'}}/> :
                <WhiteMin/>
            }
            <h3 className={classes.Value} style={{gridArea: 'min-value'}}>Min {city}</h3>
            {
                isHorizontal ?<MaxIcon className={classes.Icon} style={{gridArea: 'max-icon'}}/> :
                    <WhiteMax/>
            }
            <h3 className={classes.Value} style={{gridArea: 'max-value'}}>Max {city}</h3>
        </section>
    )
}

export default  MinMax
