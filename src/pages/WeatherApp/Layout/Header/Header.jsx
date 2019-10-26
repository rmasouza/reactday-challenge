import React from "react";
import classes from "./Header.module.scss";

import Search from "../../../../components/Input/Search";
import Logo from "../../../../components/Icon/Logo";


const Header = (props) => {
    return (
        <header className={classes.Header}>
            <Logo/>
            <Search />
        </header>
    );
};

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
