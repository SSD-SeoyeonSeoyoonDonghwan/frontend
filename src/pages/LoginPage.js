import React from "react";
import style from '../css/Login.module.css'
import googleLogo from '../assets/img/Login_Google.png'
import kakaoLogo from '../assets/img/Login_Kakao.png'
import naverlogo from '../assets/img/Login_Naver.png'
import pink from '../assets/img/Login_Pink.png'
import yellow from '../assets/img/Login_Yellow.png'
import purple from '../assets/img/Login_Purple.png'
import skyblue from '../assets/img/Login_Skyblue.png'
import magenta from '../assets/img/Login_Magenta.png'
import green from '../assets/img/Login_Green.png'

function LoginPage() {

    // kakao login
    const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const KAKAO_REDIRECT_URI = `http://localhost:3000/LoginPage/Kakao/Oauth`;  // callback url
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    function kakaoLoginHandler() {
        window.location.href = KAKAO_AUTH_URL;
    };

    // naver login
    const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
    const NAVER_REDIRECT_URI = "http://localhost:8000/oauth"; // callback url example
    const NAVER_STATE = "false";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STATE}$redirect_uri${NAVER_REDIRECT_URI}`;

    function naverLoginHandler() {
        window.location.href = NAVER_AUTH_URL;
    }

    // google login
    

    return (
        <div className={style.a}>
            <img className={style.bg} alt="star1" src={pink} />
            <img className={style.bg2} alt="star3" src={purple} />
            <img className={style.bg4} alt="star4" src={magenta} />
            <div className={style.box}>
                <div className={style.content}>
                    <div className={style.text}>
                        <p>안녕하세요<br/>로그인 후 소비를 절약해보세요!</p>
                    </div>
                    <div className={style.loginbutton}>
                        <img className={style.logo} alt="kakaoLogin" src={kakaoLogo} onClick={kakaoLoginHandler}/>
                        <img className={style.logo} alt="naverLogin" src={naverlogo} onClick={naverLoginHandler}/>
                        <img className={style.logo} alt="googleLogin" src={googleLogo} />
                    </div>
                    <img className={style.bg3} alt="dia" src={skyblue} />
                    <img className={style.bg1} alt="star2" src={yellow} />
                    <img className={style.bg5} alt="star5" src={green} />
                </div>
            </div>
            
        </div>
    );
}

export default LoginPage;