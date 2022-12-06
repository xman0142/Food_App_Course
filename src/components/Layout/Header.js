import { Fragment } from "react";
import albionImage from "../../assets/Albion-banner.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Albion Theater </h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={albionImage} alt="An Albion Flying" />
      </div>
    </Fragment>
  );
};

export default Header;
