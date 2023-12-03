import styled from 'styled-components'

const Btn = styled.button`
    background: #1F1F1F;
    color: #FFFFFF;
    border-radius: 20px;
    border: 1.6px solid #FFFFFF;
    padding: 11px 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 32px;
    font-family: diaGothicMedium;
    width: 178px;
    height: 82px;
    margin-right: 28px;
    margin-bottom: 30px;

    &:hover{
        background: #FFF960;
        color: #1F1F1F;
        border: 1.6px solid #FFF960;
    }
`;

export default Btn;