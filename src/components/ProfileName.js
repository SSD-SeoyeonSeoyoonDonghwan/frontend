import React from "react";

function ProfileName(){

    const userName = '서연';
    const userCategory = '#20대 #서울';
    const nameStyle = {
        fontSize:'32px',
        color: '#292828',
        fontWeight:'bold',
    };
    const categoryStyle = {
        fontSize: '17.4px',
        color: '#292828',
    };

    return(
        <>
            <div style={nameStyle}>
                {userName}
            </div>
            <div style={categoryStyle}>
                {userCategory}
            </div>
        </>
        
    );
}

export default ProfileName;