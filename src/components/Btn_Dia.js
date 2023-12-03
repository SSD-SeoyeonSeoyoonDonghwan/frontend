import React, { useState } from "react";
import Dia from '../assets/img/Main_Dia.png'

function Btn_Dia () {

    const [isHovered, setIsHovered] = useState(false);
    
    function handleHover () {
        setIsHovered(true);
    }

    function handleUnHover () {
        setIsHovered(false);
    }

    const textStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: isHovered ? '#FFFFFF':'#797979',
        fontSize: isHovered ? '28px' : '22px',
        fontFamily: isHovered ? 'diaGothicBold' :'diaGothicLight',
        padding: '21px',
    }
    const Styles = {
        // float: 'left',
        position: 'absolute',
        // objectFit: 'cover',
        left: '336px',
        bottom: '-220px',
        width: '352.8px', 
        height: '352.8px',
        backgroundColor: isHovered ? '#55BBF8' : '',
        trangition: 'background-color 0.3s ease',
        clipPath: isHovered ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : ''
    }
    const imgStyles = {
        width: '100%', 
        height: '100%',
        objectFit: 'cover'
    }
    return(
        <div 
            style={Styles}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnHover}    
        >
            <img
                src={Dia}
                alt="Btn Dia"
                style={imgStyles}
            />
            <div style= {textStyles}>
                소비<br/>
                대결
            </div>
        </div>
    );
}

export default Btn_Dia;