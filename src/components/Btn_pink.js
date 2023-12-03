import React from "react";
import Pink from '../assets/img/Main_Pink.png'

function Btn_Pink () {
    const textStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '24px',
        fontFamily: 'diaGothicBold',
        padding: '21px'
    }
    const Styles = {
        float: 'right',
        position: 'absolute',
        objectFit: 'cover',
        right: '100px',
        bottom: '0',
        width: '180px', 
        height: '180px'
    }
    const imgStyles = {
        width: '100%', 
        height: '100%', 
        objectFit: 'cover'
    }
    return(
        <div style={Styles}>
            <img
                src={Pink}
                alt="Btn Pink"
                style={imgStyles}
            />
            <div style= {textStyles}>
                기록<br/>
                하기
            </div>
        </div>
    );
}

export default Btn_Pink;