import React from 'react';
import styled from 'styled-components';

const LogoImg = styled('img')`
    width: 4vw;
    height: 4vw;

    @media(max-width: 960px){
        width: 19vw;
        height: 19vw;
        object-fit: cover;
    }
`;

const Logo = () => {
    return (
        <>
            <LogoImg 
            src="https://s3.amazonaws.com/gupy5/production/companies/2151/career/3661/images/2021-02-23_14-08_logo.png" 
            alt="" />
        </>
    )
}

export default Logo;
