import React from "react";
import style from '../css/SignIn.module.css'
import Button from '../components/Button'
import Button2 from '../components/btn_signIn2'
import { useNavigate } from "react-router-dom";

export default function SignInPage2() {
  const gotoNext = useNavigate();

  function gotoPattern(){
    gotoNext('/SignInPage3');
  }
  return (
    <div className={style.box}>
        <div className={style.content1}>
          <p className={style.text3}>서연님의 정확한 소비 패턴 파악을 위한<br/>생년월일을 알려주세요</p>
          <p className={style.text4}>해당 정보는 다른 유저에게 공개되지 않습니다</p>
          <div>
            <div className={style.content2}>
              <Button2>10대</Button2>
              <Button2>20대</Button2>
              <Button2>30대</Button2>
              <Button2>40대</Button2>
              <Button2>50대</Button2>
              <Button2>60대</Button2>
              <Button2>이상</Button2>
            </div>
          </div>
          
          <Button className={style.btn} onClick={gotoPattern}>완료</Button>
        </div>
    </div>    
    );
}