import React from "react";
import style from "./sass-moduls/Header.module.scss"
import { useMediaQuery } from 'react-responsive'
import sun from "../images/icon-sun.svg"
import moon from "../images/icon-moon.svg"

const Header = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })

      const mobile = props.DarkMode ? style.mobileBD : style.mobileBL
      const desktop = props.DarkMode ? style.desktopBD : style.desktopBL
      console.log(mobile, desktop)
    return(
        <>
        <header className={`${style.header} ${isDesktopOrLaptop ? desktop : mobile}`}>
        <h1>Todo</h1>
        <div className={style.ThemeToggle} onClick={() => props.handleTheme()}>
            {props.DarkMode ? <img src={moon} alt="" /> : <img src={sun} alt="" />}
        </div>
        </header>
        </>
    )
}
export default Header