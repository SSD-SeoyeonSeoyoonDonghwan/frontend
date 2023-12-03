import React from "react";
import Img1 from "../assets/img/Main_Img1.png"
import Img2 from "../assets/img/Main_Img2.png"
import style from "../css/mainPage.module.css"

function Main_handling(){

    return(
        <>
            <img className={style.bg1} alt="bg1" src={Img1} />
            <img className={style.bg2} alt="bg2" src={Img2} />
        </>
    );

}

export default Main_handling;