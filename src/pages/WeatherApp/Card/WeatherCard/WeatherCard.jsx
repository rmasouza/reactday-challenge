import React from "react";
import classes from './WeatherCard.module.scss'
import CurrentCity from "../../../../components/Weather/CurrentCity/CurrentCity";
import MinMax from "../../../../components/Weather/MinMax/MinMax";
import CurrentTemperature from "../../../../components/Weather/CurrentTemperature/CurrentTemperature";
import WheatherStatus from "../../../../components/Weather/WheatherStatus/WheatherStatus";
import { ReactComponent as Humidity } from "../../../../assets/icons/umidade.svg";
import { ReactComponent as Velocity } from "../../../../assets/icons/velocidade_vento.svg";
import { ReactComponent as Direction } from "../../../../assets/icons/direcao_vento.svg";

import WeatherDetails from "../../../../components/Weather/WeatherDetails/WeatherDetails";
const WeatherCard = () => {

    return (
        <article className={classes.WeatherCard}>
            <CurrentCity city={'Campinas'}  currentDate={new Date()} style={{gridArea:'city'}} />
            <MinMax style={{gridArea:'minmax'}} />
            <section style={{gridArea:'main-content', display: 'grid', gridAutoFlow: 'column', justifyContent: "center", gap: 50}} >
                <CurrentTemperature />
                <WheatherStatus/>
            </section>
            <WeatherDetails icon={<Humidity />} text={'Humidade'} value={20} style={{gridArea:'humidity'}} />
            <WeatherDetails icon={<Velocity />} text={'Velocidade'} value={20} style={{gridArea:'velocity'}}/>
            <WeatherDetails icon={<Direction />} text={'Direção'} value={20} style={{gridArea:'direction'}}/>
        </article>
    )
}

export default WeatherCard
