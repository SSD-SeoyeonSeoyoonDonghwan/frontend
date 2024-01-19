import React, { useState } from "react";
import Nav from '../components/Nav'
import style from '../css/mainPage.module.css'
// import style2 from '../main.module.css'
import Yellow from '../assets/img/Main_Yellow.png'
import Yellow2 from '../assets/img/Main_Yellow2.png'
import BtnPink from '../components/Btn_pink'
import BtnChat from '../components/Btn_Chat'
import BtnDia from "../components/Btn_Dia"
import BtnCircle from "../components/Btn_Circle"
import Bubble from '../components/Main_Bubble'
import MainHandling from '../components/Main_handling'
import CardStack from "../components/CardStack";
import DashBoard from "../components/Dashboard"
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";

function MainPage() {

  const [isHovered, setIsHovered] = useState(false);
  
  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  return (
    <div>
      <Nav />

      <div className={style.box}>
        <div className={style.left}>
          <div
            className={style.yellow}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}  
          >
            {isHovered ? 
              (<img src={Yellow2} alt="yellow"/>) : (<img src={Yellow} alt="default" />)
            }
          </div>
          <p className={style.text1}>오늘의 총 소비</p>
          <Bubble />
          <div className={style.calc}>
            <p className={style.text2}>180,800</p>
            <p className={style.text3}>won</p>
          </div>
          <p className={style.text1}>카페</p>

          <div className={style.calc}>
            <p className={style.text2}>1,800</p>
            <p className={style.text3}>won</p>
            <BtnDia />
          </div>

        
          <a href="./LoginPage">로그인</a>
          <a href="./SignInPage1">회원가입1</a>
          <a href="./SignInPage2">회원가입2</a>
          <a href="./SignInPage3">회원가입3</a>
        </div>
        <BtnCircle />
        <div>
          {/* <Card/> */}
          <h1>이거 왜 안보여요</h1>
          {/* <CardContainer /> */}
        </div>
        <div className={style.right}>
          <BtnChat />
          <MainHandling />
          <BtnPink />
        </div>
      </div>
        
    </div>    
    );
}

export default MainPage;