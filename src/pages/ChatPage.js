import React from "react";
import style from '../css/ChatPage.module.css'
import Nav from '../components/Nav'

function ChatPage() {

  return (
    <div>
      <Nav />
      <div className={style.box}>
        <h3> 여기는 Chat페이지</h3>
      </div>
    </div>    
    );
}

export default ChatPage;