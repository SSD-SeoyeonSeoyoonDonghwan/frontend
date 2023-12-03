import React from "react";
import Nav from "../components/Nav"
import style from "../css/BattlePage.module.css"

function BattlePage() {

  return (
    <div>
        <Nav />
        <div className={style.box}>
          <h3> 여기는 Battle페이지</h3>
        </div>
        
    </div>    
    );
}

export default BattlePage;