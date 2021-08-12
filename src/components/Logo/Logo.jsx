import React from 'react';
import {styled} from '@material-ui/core/styles';

const LogoImg = styled('img')(({
    width: '4vw',
    height: '4vw',
}));

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
