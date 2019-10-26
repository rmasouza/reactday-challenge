import React from 'react'
import classes from './NextDay.module.scss'
import MinMax from "../MinMax/MinMax";
import { ReactComponent as Sun } from "../../../assets/icons/ensolarado_b.svg";

const NextDay = (props) => {

    return (
        <section className={classes.NextDay}>
            <section>
                <div className={classes.StrongText} style={{marginTop: 'auto'}}>Sexta</div>
                <div className={classes.Text} style={{marginBottom: 'auto'}}>11/10/2019</div>
            </section>
            <section className={classes.Divisor}>
                <Sun />
                <div className={classes.StrongText}>Ensolarado</div>
            </section>
            <section>
                <MinMax isHorizontal={false}/>
            </section>
        </section>
    )
}

export default NextDay;
