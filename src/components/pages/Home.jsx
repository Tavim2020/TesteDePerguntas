import React from 'react';
import { HomeContainer, ContainerButtons, ContainerPerguntas, ButtonModified } from './style/HomeStyle';
import { GlobalContext } from '../../context/GlobalContext';
import Buttons from '../Button/Buttons';

const Home = () => {

   
    const divResponses = React.useRef('');
    const [contAcertos, setContAcertos] = React.useState(false);
    const [valuesOptionsClicked, setValuesOptionsClicked] = React.useState('');
    const [valueCorrectQuestions, setValueCorrectQuestions] = React.useState('');
    const [stateButton, setStateButton] = React.useState(false);
    const [showButton, setShowButton] = React.useState(false);

    const { formulario, 
        responseCallback, 
        number, 
        setNumber,
        buttons, 
        respostas,
        responseFetch,
        newArray,
        allResponse
    } = React.useContext(GlobalContext);

    React.useEffect(()=>{
        !formulario && !buttons && respostas && setTimeout(()=>{ setShowButton(true) }, 1000)
    }, [buttons, formulario, respostas])


    React.useEffect(()=>{
        if(valuesOptionsClicked && valueCorrectQuestions){
            const clickedIndexCorrect = valuesOptionsClicked.splice(',');
            const correctOptionsIndex = valueCorrectQuestions[0].splice(',');
            setContAcertos(clickedIndexCorrect.filter((click, index) => click === correctOptionsIndex[index]).length);

            const localStorageVar = 'Total de Acertos: ' + clickedIndexCorrect.filter((click, index) => click === correctOptionsIndex[index]).length;

            window.localStorage.setItem('Acertos', localStorageVar);

            setStateButton(true);

            setTimeout(()=> {
                window.location.reload();
            }, 1000)

            setValuesOptionsClicked('')
            setValueCorrectQuestions('');
        }
    }, [valuesOptionsClicked, valueCorrectQuestions, contAcertos])

    function trueOrFalse(event){
        const id = event.target.id;
        const array = Array.from(event.target.parentNode.parentNode.children);
        const newArrayChecked = array.map((div)=> div.children[0].id);
        const checkedResponses = array.map((div)=> div.children[0].checked)
        if(checkedResponses[id]){
            const responseChecked = newArrayChecked[id];
            if(responseChecked){
                const atualizandoArrayChecked = newArrayChecked.filter((resposta) => resposta !== responseChecked);
                atualizandoArrayChecked.map((id) => array[id].children[0].checked = false);
            }
            
        }
    }



    function ConcluindoTestes(){
        const correctResponse = responseFetch.map((perguntas) => perguntas.correct_answer);

        const optionsCorrect = allResponse.map((fetchResponseSort, index) => fetchResponseSort.indexOf(correctResponse[index]));
        setValueCorrectQuestions([optionsCorrect])
        

        const allOptions = Array.from(divResponses.current.children);
        if(divResponses.current){
            const optionsMap = allOptions.map(
                (div) => div.children[2].children[0]);
            const newMapOptions = optionsMap.map((container) => container.children);
            
            for(let i=0; i<newMapOptions.length; i++){
                const allInput = Array.from(newMapOptions[i]).map((div) => div.children[0]);
                const allResponsesUser = allInput.map((input) => input.checked);
                const indexClicked = allResponsesUser.indexOf(true);
                setValuesOptionsClicked(array => [...array, indexClicked]); 
            }
        }
    }



    
    return (
        <HomeContainer>

            {formulario &&
                <form onSubmit={responseCallback}>

                    <label htmlFor={'perguntas'}>Quantas perguntas deseja responder?</label>

                    <input 
                    type="text" 
                    id={'perguntas'}
                    value={number.replace(/\D/g, '')}
                    onChange={({target}) => setNumber(target.value)}
                    required/>


                    <button type={'submit'}>Enviar</button>

                </form>
            }

            {buttons &&
                <ContainerButtons>

                    <Buttons 
                    backgroundColor={'#069e2c'}
                    color={'#ffffff'}
                    marginRight={'10vw'}>
                        Start
                    </Buttons>
    
                    <Buttons 
                    backgroundColor={'#d72638'}
                    color={'#ffffff'}>
                        Cancel
                    </Buttons>

                </ContainerButtons>
            }

            {respostas && 

                <div ref={divResponses}>
                {responseFetch.map((pergunta, index) =>
                    <ContainerPerguntas key={index}>
                        <h5>Categoria: {pergunta.category}</h5>
                        <h3>{index + 1}º Pergunta - {pergunta.question.replace(/[&quot;]/g, '')}</h3>

                        <div className={'container'}>
                          
                            <div className={'respostas'}>
                            {newArray[index] && newArray[index].map((resposta, index)=> 
                                    <div key={index + Math.random() * 100000}>
                                        <input type={'checkbox'} id={index} onClick={trueOrFalse}/>
                                        <p>{resposta}</p>
                                    </div>
                                )
                            }                          
                            </div>
                           
                            <div className={'dificuldade'}>
                                <h6>Dificuldade: {pergunta.difficulty}</h6>
                            </div>

                        </div>

                    </ContainerPerguntas>
                )}
                </div>
            }

            {!formulario && !buttons && respostas && 
                <div className={'finallyContainer'}>
                    {contAcertos && stateButton && contAcertos !== 0 ?
                    (
                        <p className={'acertos'}>Total de Acertos: {contAcertos}</p>
                    ) : stateButton && contAcertos === 0 &&(
                        <p className={'acertos'}>Infelizmente você não acertou nenhuma pergunta.</p>
                    )}
                    

                    
        

                    <div>
                           
                        {showButton &&
                            <ButtonModified  onClick={ConcluindoTestes}>
                                Concluir
                            </ButtonModified>
                        }
                    </div>
                
                </div>
            }
            

        </HomeContainer>
    )
}

export default Home;
