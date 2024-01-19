import React from "react";
// import style from '../css/mainPage.module.css'
import style from '../css/MyPage.module.css'
import Nav from '../components/Nav'
import ProfileBox from '../components/Mypage_Profile'
import MyPageBox from '../components/Mypage_Box'

function MyPage() {

  return (
    <>
      <Nav/>
      <div className={style.box}>
        <ProfileBox />
        <div>
        </div>
        <div className={style.board}>
          <MyPageBox />
          <MyPageBox />
          <MyPageBox />
        </div>
        
      </div>  
    </>
    
    );
}

export default MyPage;