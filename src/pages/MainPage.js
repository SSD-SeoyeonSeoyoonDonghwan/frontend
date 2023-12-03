import React from "react";
import Nav from '../components/Nav'
import style from '../css/mainPage.module.css'
// import style2 from '../main.module.css'
import Yellow from '../assets/img/Main_Yellow.png'
import BtnPink from '../components/Btn_pink'
import BtnChat from '../components/Btn_Chat'
import BtnDia from "../components/Btn_Dia"
import BtnCircle from "../components/Btn_Circle"
import Bubble from '../components/Main_Bubble'
import MainHandling from '../components/Main_handling'

function MainPage() {

  return (
    <div>
      <Nav />

      <div className={style.box}>
        <div className={style.left}>
          <img className={style.yellow} alt="yellow" src={Yellow} />
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
          </div>

        
          <a href="./LoginPage">로그인</a>
          <a href="./SignInPage1">회원가입1</a>
          <a href="./SignInPage2">회원가입2</a>
          <a href="./SignInPage3">회원가입3</a>
        </div>
        <BtnCircle />
        <BtnDia />
        <div className={style.right}>
          {/* <img className={style.bg2} alt="bg2" src={Img2} /> */}
          <BtnChat />
          <MainHandling />
          {/* <img className={style.bg1} alt="bg1" src={Img1} /> */}
          <BtnPink />
        </div>
      </div>
        
    </div>    
    );
}

export default MainPage;