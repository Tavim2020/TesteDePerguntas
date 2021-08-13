import styled from 'styled-components';


export const HomeContainer = styled('main')`
    width: 100vw;

    form{
        margin: 0 auto;
        width: 50%;
        height: 25vw;
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
            height: 4vw;
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
            height: 2.8vw;
            color: #fff;
            transition: background-color 0.5s;
            cursor: pointer;
            font-size: 1.2vw;
            font-weight: bold;

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

    @media(max-width: 960px){
        form{
          
            width: 75%;
            height: 130vw;


            label{
                font-size: 4.2vw;
            }

            input{
                width: 80%;
                height: 11vw;
                padding: 0.8vw;
                font-size: 3.9vw;
                letter-spacing: 0.08vw;
            }

            button{
                width: 45%;
                height: 12vw;
                cursor: pointer;
                font-size: 4.3vw;
            }
        }

        .finallyContainer{
            width: 90%;
            
            .acertos{
                font-size: 4.1vw;
                text-align: center;
            }

            div{
                margin-top: 3.5vw;
                margin-bottom: 3.5vw;
            }

        }

    }
`;

export const ContainerButtons = styled('div')`
    width: 100vw;
    height: 33vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;

    @media(max-width: 960px){
        height: 200vw;
    }
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


    @media(max-width: 960px){
        width: 90%;
        
        h5{
            text-align: center;
            margin-bottom:3.5vw;
            margin-top: 4vw;
            font-size: 3.8vw;
          
        }

    h3{
        font-size: 4.3vw;
    }


    .container{
        .respostas{
            width: 60%;
            margin-top: 3.5vw;
            div{
                input{
                    width: 4vw;
                    height: 4vw;
                }
                p{
                    margin-left: 2.5vw;
                    font-size: 4.1vw;
                }

            }
        }
        
        .dificuldade{
            width: 40%;

            h6{
                font-size: 3.2vw;
            }
        }
    }
    }
`;


export const ButtonModified = styled('button')`
    background-color: #0077D4;
    color: #fff;
    width: 12vw;
    height: 4vw;
    font-size: 1.2vw;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background-color: #72b6eb;
    }

    @media(max-width: 960px){
        width: 27vw;
        height: 15vw;
        font-size: 3.8vw;
    }
`;