import React from "react";
import style from '../css/SignIn.module.css'
import Button from "../components/Button";
import NikName from "../components/nikname";
import { useNavigate } from "react-router-dom";

function SignInPage1() {
  const gotoNext = useNavigate();

  function gotoPattern(){
    gotoNext('/SignInPage2');
  }
  return (
    <div className={style.box}>
        <div className={style.content1}>
          <p className={style.text1}>닉네임을 설정해주세요</p>
          <div className={style.content2}>
            <NikName className={style.form}></NikName>
            <Button>확인</Button>
          </div>
          <p className={style.text2}>*닉네임은 8글자를 넘지 않게 해주세요 (띄어쓰기 포함)</p>
          {/* <p className={style.text2}>*사용가능한 닉네임 입니다</p> */}
          <Button className={style.btn} onClick={gotoPattern}>완료</Button>
        </div>
    </div>    
    );
}

export default SignInPage1;