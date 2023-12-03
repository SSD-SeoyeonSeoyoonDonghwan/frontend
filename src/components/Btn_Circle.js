import React, {useState} from "react";
import Circle from '../assets/img/Main_Circle.png'

function Btn_Circle () {

    const [isHovered, setIsHovered] = useState(false);
    
    function handleHover () {
        setIsHovered(true);
    }

    function handleUnHover () {
        setIsHovered(false);
    }

    const Styles = {
        float: 'left',
        position: 'absolute',
        objectFit: 'cover',
        left: '247px',
        bottom: '-92px',
        width: '46px', 
        height: '46px',
        backgroundColor: isHovered ? '#68CC58' : '',
        trangition: 'background-color 0.3s ease',
        borderRadius: isHovered ? '50%' : ''
        // clipPath: isHovered ? 'polygon(0% 0%, 100% 0%, 50% 100%, 0% 0%)' : ''
    }
    const imgStyles = {
        width: '100%', 
        height: '100%', 
        objectFit: 'cover',
    }
    return(
        <div 
            style={Styles}
            onMouseEnter={handleHover}
            onMouseLeave={handleUnHover}     
        >
            <img
                src={Circle}
                alt="Btn Circle"
                style={imgStyles}
            />
        </div>
    );
}

export default Btn_Circle;