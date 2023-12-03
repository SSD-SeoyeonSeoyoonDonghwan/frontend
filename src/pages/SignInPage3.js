import React from "react";
import style from '../css/SignIn.module.css'
import Button from '../components/Button'
import Button2 from '../components/btn_signIn2'
import { useNavigate } from "react-router-dom";

export default function SignInPage3() {
  const gotoMain = useNavigate();

  function gotoHome(){
    gotoMain('/');
  }
  return (
    <div className={style.box}>
        <div className={style.content1}>
          <p className={style.text3}>서연님의 정확한 소비 패턴 파악을 위한<br/>거주지역을 작성해주세요</p>
          <p className={style.text4}>해당 정보는 다른 유저에게 공개되지 않습니다</p>
          <div>
              <div className={style.content2}>
                <Button2>서울</Button2>
                <Button2>경기</Button2>
                <Button2>인천</Button2>
                <Button2>강원</Button2>
                <Button2>경상</Button2>
              </div>
              <div className={style.content2}>
                <Button2>울산</Button2>
                <Button2>대구</Button2>
                <Button2>광주</Button2>
                <Button2>부산</Button2>
                <Button2>제주</Button2>
              </div>
          </div>
          
          <Button className={style.btn} onClick={gotoHome}>완료</Button>
        </div>
    </div>    
    );
}