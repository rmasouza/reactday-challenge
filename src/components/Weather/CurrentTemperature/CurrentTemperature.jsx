import React from 'react'
import classes from './CurrentTemperature.module.scss'
import MediaIcon from "../../Icon/Media";

const CurrentTemperature = (props) => {
    const { value, details} = props;
    console.log(classes,'hello')
    return (
        <div className={classes.CurrentTemperature} >
            <MediaIcon className={classes.Icon} />
            <h2 className={classes.Temperature}>20</h2>
            <p className={classes.Details}>details</p>
        </div>
    )
}

export default CurrentTemperature
