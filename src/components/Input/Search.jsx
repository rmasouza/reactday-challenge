import React from 'react';
import SearchIcon from "../Icon/SearchIcon";
import classes from "./Search.module.scss";

const Search = () => {

    return (
        <section className={classes.Search}>
            <input className={classes.Input} />
            <SearchIcon clasName={classes.Icon} />
        </section>
    )
}

export default Search
