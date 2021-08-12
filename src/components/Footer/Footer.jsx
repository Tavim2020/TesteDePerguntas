import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const FooterContainer = styled('footer')`
    width: 100vw;
    height: 15vh;
    background-color: ${({theme}) => theme.palette.primary.light};
    margin-top: auto !important;

    div{
        margin: 0 auto;
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h2{
            font-size: 1.7vw;
        }
    }
`;


const Footer = () => {
    return (
        <FooterContainer>
            <div>
                
                <h2>Responda as perguntas e veja se você acertou.</h2>

                <Logo />

            </div>
        </FooterContainer>
    )
}

export default Footer;
