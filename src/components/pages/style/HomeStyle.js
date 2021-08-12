import styled from 'styled-components';


export const HomeContainer = styled('main')`
    width: 100vw;

    form{
        margin: 0 auto;
        width: 50%;
        height: 55.5vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 4vw;


        label{
            font-size: 1.3vw;
            font-family: ${({theme}) => theme.typography.fontFamily};
            text-align: center;
            color: ${({theme}) => theme.palette.text.primary};
        }

        input{
            margin: 0 auto;
            width: 40%;
            height: 6vh;
            padding: 0.4vw;
            font-size: 1.4vw;
            margin-top: 1vw;
            margin-bottom: 2vw;
            outline: 0.8vw;
            letter-spacing: 0.04vw;
        }

        button{
            margin: 0 auto;
            width: 20%;
            background-color: ${({theme}) => theme.palette.primary.main};
            height: 4.5vh;
            color: #fff;
            transition: background-color 0.5s;
            cursor: pointer;

            &:hover{
                background-color: #72b6eb;
            }
        }
    }

    .finallyContainer{
        margin: 0 auto;
        width: 80%;
        .acertos{
            font-size: 1.6vw;
            text-align: right;
        }

        div{
            margin-top: 2vw;
            margin-bottom: 2vw;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }
`;

export const ContainerButtons = styled('div')`
    width: 100vw;
    height: 71vh;
    display: flex;
    align-items: center;
    justify-content: center;

    
`;


export const ContainerPerguntas = styled('div')`
    margin: 0 auto;
    width: 80%;
    min-height: 46.6vh;
    height: max-content;
    margin-top: 3vw;
    h5{
        text-align: center;
        margin-bottom:1vw;
        margin-top: 2vw;
        font-size: 1vw;
        color: ${({theme}) => theme.palette.text.secondary}
    }

    h3{
        color: ${({theme}) => theme.palette.text.primary};
        font-size: 1.4vw;
    }


    .container{
        width: 100%;
        display: flex;

        .respostas{
            width: 70%;
            display: flex;
            flex-direction: column;
            margin-top: 2vw;
            div{
                display: flex;
                align-items: center;
                input{

                    width: 1.5vw;
                    height: 1.5vw;
                }
                p{
                    margin-left: 1vw;
                    font-size: 1.2vw;
                    color: ${({theme}) => theme.palette.text.secondary};
                }

            }
        }
        
        .dificuldade{
            width: 25%;
            display: flex;
            justify-content: flex-end;

            h6{
                font-size: 0.9vw;
            }
        }
    }
`;