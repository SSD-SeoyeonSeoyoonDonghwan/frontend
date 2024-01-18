import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectPage() {

    const code = new URL(window.location.href).searchParams.get("code");    // code만 추출
    // const code = new URL(dococument.location.toString()).searchParams.get('code');
    // const code = window.location.search; // all code
    const navigate = useNavigate();

    useEffect(() => {
        console.log(process.env.REACT_APP_KAKAO_URL);
        axios.post();
    });


  return (
    <div>
        <p>이얍</p>
    </div>    
    );
}

export default RedirectPage;