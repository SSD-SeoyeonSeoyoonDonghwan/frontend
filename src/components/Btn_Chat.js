import React from "react";
import Star from '../assets/img/Main_Star1.png'

function Btn_Chat () {
    const textStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '18px',
        fontFamily: 'diaGothicLight',
        padding: '21px',
        // eslint-disable-next-line no-dupe-keys
        color: '#797979'
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
            <img
                src={Star}
                alt="Btn Chat"
                style={imgStyles}
            />
            <div style= {textStyles}>
                채팅
            </div>
        </div>
    );
}

export default Btn_Chat;