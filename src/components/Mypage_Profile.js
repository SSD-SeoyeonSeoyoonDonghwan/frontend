import React from "react";
import ProfileImg from "./ProfileImg";

function MyPage_Profile() {
    
    const ImgStyles = {
        width: '97px',
        height: '97px',
        marginTop: '19px',
        marginLeft: '50px',
    };

    const BtnStyles = {
        width: '113px',
        height: '50px',
        fontSize: '20px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '27.5px',
        backgroundColor: '#D8D468',
        marginTop: '46px',
        marginRight: '51px',
    };

    const Styles = {
        width : '1300px',
        height : '138px',
        backgroundColor : '#FFF960',
        borderRadius : '24px',
        display: 'flex',
        justifyContent:'space-between',
    }

    return (
        <div style={Styles}>
            <div style={ImgStyles}>
                <ProfileImg/>
            </div>
            <button style={BtnStyles}>수정하기</button>
        </div>
    );
}

export default MyPage_Profile;