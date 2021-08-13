import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const FooterContainer = styled('footer')`
    width: 100vw;
    height: 15vh;
    background-color: ${({theme}) => theme.palette.primary.light};
    margin-top: auto;

    div{
        margin: 0 auto;
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3{
            font-size: 1.7vw;
        }
    }

    @media(max-width: 960px){
        height: 24vw;
        div{
            width: 90%;

            h3{
                font-size: 4.3vw;
                text-align: center;
                width: 70%;
            }
        }
    }
`;


const Footer = () => {
    return (
        <FooterContainer>
            <div>
                
                <h3>Responda as perguntas e veja se você acertou.</h3>

                <Logo />

            </div>
        </FooterContainer>
    )
}

export default Footer;
