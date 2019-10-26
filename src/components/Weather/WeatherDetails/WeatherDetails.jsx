import React from 'react'
import classes from './WeatherDetails.module.scss'

const WeatherDetails = (props) => {
    const {icon, text, value} = props;
    return (
        <section className={classes.WeatherDetails}>
            {icon}
            <p className={classes.Text}>{text}</p>
            <h3 className={classes.Value}>{value}</h3>
        </section>
    )
}

export default  WeatherDetails
