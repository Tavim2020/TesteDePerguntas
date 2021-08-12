import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../context/GlobalContext';


const Button = styled('button')`
    width: 12vw;
    height: 6vh;
    font-size: 1.2vw;
    border-radius: 0.8vw;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.5s;
`;

const Buttons = ({children, backgroundColor, color, marginRight}) => {

    const { ButtonStartOrCancel } = React.useContext(GlobalContext)

    return (
        <Button 
        style={{ backgroundColor, color, marginRight}}
        onClick={ButtonStartOrCancel}>
            {children}
        </Button>
    )
}

export default Buttons;
