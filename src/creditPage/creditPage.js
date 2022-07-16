import React, { useState } from 'react';
import BackgroundSection from './backgroundSection/backgroundSection';
import Calculator from './calculator/calculator';
import ModalWindow from './modal/modalWindow';
import Term from './termSection/termSection';
import './creditPage.scss'


const CreditPage = () => {
    const [modalActiveSorry,setModalActiveSorry] = useState(false)
    const [modalActiveInvoice,setModalActiveInvoice] = useState(false)
    return(
    <>
        <BackgroundSection/>
        <Term/>
        <Calculator activeSorry={setModalActiveSorry} setActiveSorry={setModalActiveSorry}/>
        <ModalWindow active={modalActiveSorry} setActive={setModalActiveSorry}>
            <div className="modalSorryContent">
                <div className='flex'>
                    <span className="icon-ic_exclamation_circle warning"></span>
                    <h1>Sorry</h1>
                </div>
                <p>You don't have a cDram coin! Please buy a Cdram for getting a loan</p>
                <button>Buy now</button>
            </div>
            <span className="icon-Close-Button path1 closeBtn"><span className="icon-Close-Button path2"></span></span>
        </ModalWindow>
        
        <ModalWindow active={modalActiveInvoice} setActive={setModalActiveInvoice}>
            <div className="modalIncoiceContent">
                <h1>Invoice</h1>
                <div className="flexContainer">
                    <div className="flex"><span>Collateral currency</span><span className='bolder'>USDT</span></div>
                    <div className="flex"><span>Loan currency</span><span className='bolder'>cDram</span></div>
                    <div className="flex"><span>Data to be paid</span><span className='bolder'>25.09.2022</span></div>
                    <div className="flex"><span>Interest rate</span><span className='bolder'>10%</span></div>
                    <div className="flex"><span>Loyalty level discount</span><span className='bolder'>-0.02%</span></div>
                    <div className="flex"><span>Loan disbursement fee</span><span className='bolder'>3%</span></div>
                    <div className="flex"><span>Actual interest rate</span><span className='bolder'>4%</span></div>
                    <div className="flex"><span className='noFlex flex bold'>You will get <span className='small'>(net of the loan disbursement fee)</span></span><span className='c1000'>1000 cDram</span></div>
                    <div className="flex"><span className='noFlex flex'>Amount to be paid <span className="small">(at the and of term)</span></span><span className='bolder c1200' >1200 cDram</span></div>
                </div>
                <p>*Your crypto wallet transaction fees are not taken</p>
                <div style={{textAlign:'center'}}>
                    <button>Get loan</button>
                </div>
            </div>
        </ModalWindow>
    </>
    )
}


export default CreditPage