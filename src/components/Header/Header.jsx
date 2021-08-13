import React from 'react';
import Logo from '../Logo/Logo';
import styled from 'styled-components';




const HeaderContainer = styled('header')`
    width: 100vw;
    height: 7vw;
    background-color: ${({theme}) => theme.palette.secondary.light};
    position: sticky;
    top: 0%;
    display: flex;
    align-items: center;

    @media(max-width: 960px){
        height: 24vw;
    }
    
`;


const ContainerHeader = styled('div')`
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 960px){
        width: 90%;
    }
`;

const TitleContainer = styled('div')`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.5vw;
    h2{
        font-family: ${({theme}) => theme.typography.fontFamily };
        color: ${({theme}) => theme.palette.text.primary};
    }

    @media(max-width: 960px){
        width: 80%;
        font-size: 4.5vw;
        h2{
            font-family: ${({theme}) => theme.typography.fontFamily };
            color: ${({theme}) => theme.palette.text.primary};
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <ContainerHeader>

                <Logo />

                <TitleContainer>

                    <h2>Formulário de Respostas</h2>

                </TitleContainer>

            </ContainerHeader>
        </HeaderContainer>
    )
}

export default Header;
