import React, {useState} from "react";
import Star from '../assets/img/Main_Star1.png'
import Star2 from '../assets/img/Main_Star2.png'


function Btn_Chat () {
    
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }
    function handleMouseLeave(){
        setIsHovered(false);
    }
    
    const textStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: isHovered ? '25px' : '18px',
        fontFamily: isHovered ? 'diaGothicBold' : 'diaGothicLight',
        padding: '21px',
        color: isHovered ? '#FFFFFF' : '#797979'
    }
    const Styles = {
        float: 'right',
        position: 'absolute',
        objectFit: 'cover',
        right: '150px',
        top: '100px',
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
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isHovered ? (
                <img src={Star2} alt="Btn Chat"style={imgStyles}/>) : (
                    <img src={Star} alt="Btn Chat2"style={imgStyles}/>
                )};
            </div>
            
            <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style= {textStyles}
            >
                채팅
            </div>
        </div>
    );
}

export default Btn_Chat;