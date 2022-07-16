import React from 'react';
import Term from '../creditPage/termSection/termSection';
import DepositBackround from './depositBackground/depositBackground';
import DepositCalculator from './depositCalculator/depositCalculator';

const DepositPage = () => {
    return(
        <>
            <DepositBackround/>
            <Term/>
            <DepositCalculator/>
        </>
    )
}

export default DepositPage