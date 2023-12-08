import React, {useState} from "react";
import Bubble from '../assets/img/Main_Bubble.png'

function Main_Bubble () {

    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }
    function handleMouseLeave(){
        setIsHovered(false);
    }

    const textStyles = {
        position: 'absolute',
        top: '35%',
        transform: 'translate(10%, -50%)',
        color: '#FFFFFF',
        fontSize: '18px',
        fontFamily: 'diaGothicMedium',
    }
    const Styles = {
        float: 'left',
        position: 'absolute',
        objectFit: 'cover',
        left: '354px',
        // bottom: '-220px',
        width: '253px', 
        height: '62px',
        trangition: 'background-color 0.3s ease',
    }
    const imgStyles = {
        width: '100%', 
        height: '100%',
        objectFit: 'cover'
    }
    return(
        <div 
            style={Styles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isHovered && (
                <div>
                    <img
                        src={Bubble}
                        alt="Btn Dia"
                        style={imgStyles}
                    />
                    <div style= {textStyles}>
                    오늘 쓴 금액을 등록해보세요!
                    </div>
                </div>
            )}
            
            
        </div>
    );
}

export default Main_Bubble;