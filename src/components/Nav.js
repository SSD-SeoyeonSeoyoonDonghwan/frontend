import { Link } from "react-router-dom";
import style from '../css/Nav.module.css'

function Nav() {
  // const loginCheck = useRecoilValue(Login);
  // const unlogin = (event) => {
  //   if (loginCheck === false) alert("로그인을 진행해주세요.");
  // };

  return (
    <div className={style.header}>
      <div>
        {/* <Link to="/">
          <img alt="Codethat Logo" />
        </Link> */}
      </div>
      <div className={style.nav}>
        <ul className={style.menu}>
          <li>
            <Link to={"/BattlePage"} style={{textDecoration: "none", color:"#FFFFFF"}}>
              대결
            </Link>
          </li>
          <li>
            <Link to={"/ChatPage"} style={{textDecoration: "none", color:"#FFFFFF"}}>
              채팅
            </Link>
          </li>
          <li>
            <Link to={"/MyPage"} style={{textDecoration: "none", color:"#FFFFFF"}}>
              마이페이지
            </Link>
          </li>
        </ul>
      </div>
    </div>
    
  );
}

export default Nav;