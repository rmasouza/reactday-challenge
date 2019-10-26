import React from 'react'
import classes from './WheatherStatus.module.scss'
// import CloudIcon from "../../Icon/CloudIcon";
import { ReactComponent as CloudIcon } from "../../../assets/icons/arrow-right.svg";

const WheatherStatus = (props) => {

    return (
        <section className={classes.WheatherStatus}>
            <CloudIcon className={classes.Icon} />
            <p className={classes.Details}>Nublado</p>
        </section>
    )
}

export default WheatherStatus
