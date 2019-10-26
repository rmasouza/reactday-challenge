import React from "react";
import classes from './WeatherApp.module.scss'
import Header from "./Layout/Header/Header";
import WeatherCard from "./Card/WeatherCard/WeatherCard";
import NextDay from "../../components/Weather/NextDay/NextDay";


const WeatherApp = () => {

    return (
        <article className={classes.WeatherApp}>
            <Header />
            <section className={classes.Content}>
                <WeatherCard />
                <section className={classes.NextDayList}>
                    <NextDay />
                    <NextDay />
                    <NextDay />
                    <NextDay />
                    <NextDay />
                </section>
            </section>
        </article>
    )
}

export default WeatherApp
