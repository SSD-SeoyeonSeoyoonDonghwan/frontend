import React from "react";
// import style from '../css/mainPage.module.css'
import style from '../css/MyPage.module.css'
import Nav from '../components/Nav'


function MyPage() {

  return (
    <>
      <Nav/>
      <div className={style.box}>
      
        <div>
          <h3> 여기는 My페이지</h3>
        </div>
        
      </div>  
    </>
    
    );
}

export default MyPage;