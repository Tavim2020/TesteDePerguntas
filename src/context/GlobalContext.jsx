import React from 'react';
import axios from 'axios';


export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) =>{


    const [number, setNumber] = React.useState('');
    const [formulario, setFormulario] = React.useState(true);
    const [buttons, setButtons] = React.useState(false);
    const [respostas, setRespostas] = React.useState(true);
    const [responseFetch, setResponseFetch] = React.useState([]);
    const [allResponse, setAllResponse] = React.useState([]);
    const [newArray, setNewArray] = React.useState([]);
    const [newData, setNewData] = React.useState('');


    const responseCallback = React.useCallback((event) => {
        event.preventDefault();
        if(number){
            setFormulario(false);
            setButtons(true)
        }
    }, [number]);

    const ButtonStartOrCancel = React.useCallback((event)=>{
        if(event.target.textContent === 'Start'){
            setButtons(false);
            setRespostas(true);
            if(number && respostas){
                axios.get(`https://opentdb.com/api.php?amount=${number}`)
                .then(response => response)
                .then(response => setNewData(response.data))  
            }
            
        }
        else{
            setButtons(false);
            setFormulario(true);
        }
        
    }, [number, respostas]);

    React.useEffect(()=>{
        if(newData){
            setResponseFetch(newData.results);
            
            newData.results.map((resultado) => 
                setAllResponse(result => [...result, resultado.incorrect_answers.concat(resultado.correct_answer)])
            )
        }
    }, [newData])

    React.useEffect(()=>{
        if(allResponse){
            setNewArray(allResponse.map((resposta) => resposta.sort()))
        }     
    }, [allResponse])



    return (
        <GlobalContext.Provider value={{
            number, 
            setNumber,
            formulario, 
            setFormulario,
            buttons, 
            setButtons,
            respostas, 
            setRespostas,
            responseFetch, 
            setResponseFetch,
            responseCallback,
            ButtonStartOrCancel,
            newArray,
            allResponse,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}