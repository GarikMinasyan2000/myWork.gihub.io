import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import './faq.scss'


const Faq = () => {
    const [activeDrop1,setActiveDrop1] = useState(false)
    const [activeDrop2,setActiveDrop2] = useState(false)
    const [activeDrop3,setActiveDrop3] = useState(false)
    const [activeDrop4,setActiveDrop4] = useState(false)
    const [activeDrop5,setActiveDrop5] = useState(false)
    
    const [activeDrop6,setActiveDrop6] = useState(false)
    const [activeDrop7,setActiveDrop7] = useState(false)
    const [activeDrop8,setActiveDrop8] = useState(false)
    const [activeDrop9,setActiveDrop9] = useState(false)
    const [activeDrop10,setActiveDrop10] = useState(false)



    return(
        <div className="faqSection">
            <div className="faqBackground container-fluid row justify-content-sm-between justify-content-xl-around">
                <div className='backTitle col-sm-12 col-md-6'>
                    <h1>Contact Us</h1>
                    <p>Any question or remarks?Just write us a message!</p>
                </div>
                <i className='backLogo icon-Illustration'></i>
            </div>
            <div className="faqBody">
                <h1>What do I need to play?</h1>
                <div onClick={()=>setActiveDrop1(!activeDrop1)} className="drop">
                    <div className="flexFaq">
                        <p className="title">How can I become an investor in the company?</p>
                        <FaAngleDown className={activeDrop1 && 'active'}/>
                    </div>
                    <p className={activeDrop1 ? 'activeDown down' : 'down'}>
                    </p>
                </div>
                <div onClick={()=>setActiveDrop2(!activeDrop2)} className="drop">
                    <div className="flexFaq">
                        <p className="title">What determines the income of investors and what% can be expected?</p>
                        <FaAngleDown className={activeDrop2 && 'active'}/>
                    </div>
                    <p className={activeDrop2 ? 'activeDown down' : 'down'}>
                    </p>
                </div>
                <div onClick={()=>setActiveDrop3(!activeDrop3)} className="drop">
                    <div className="flexFaq">
                        <p className="title">How are payments to investors organized?</p>
                        <FaAngleDown className={activeDrop3 && 'active'}/>
                    </div>
                    <p className={activeDrop3 ? 'activeDown down' : 'down'}>
                    </p>
                </div>
                <div onClick={()=>setActiveDrop4(!activeDrop4)} className="drop">
                    <div className="flexFaq">
                        <p className="title">How is the contract signed?</p>
                        <FaAngleDown className={activeDrop4 && 'active'}/>
                    </div>
                    <p className={activeDrop4 ? 'activeDown down' : 'down'}>
                        .To sign all the documents required to become an investor, a simple electronic signature in the form of SMS is used. Also, all documents will be available in your personal account.
                    </p>
                </div>
                <div onClick={()=>setActiveDrop5(!activeDrop5)} className="drop">
                    <div className="flexFaq">
                        <p className="title">How are investment objects checked?</p>
                        <FaAngleDown className={activeDrop5 && 'active'}/>
                    </div>
                    <p className={activeDrop5 ? 'activeDown down' : 'down'}>
                    </p>
                </div>


                <h1>Buying and selling</h1>


                <div onClick={()=>setActiveDrop6(!activeDrop6)} className="drop">
                    <div className="flexFaq">
                        <p className="title">How can I become an investor in the company?</p>
                        <FaAngleDown className={activeDrop6 && 'active'}/>
                    </div>
                    <p className={activeDrop6 ? 'activeDown down' : 'down'}>
                    </p>
                </div>
                <div onClick={()=>setActiveDrop7(!activeDrop7)} className="drop">
                    <div className="flexFaq">
                        <p className="title">What determines the income of investors and what% can be expected?</p>
                        <FaAngleDown className={activeDrop7 && 'active'}/>
                    </div>
                    <p className={activeDrop7 ? 'activeDown down' : 'down'}>
                    </p>
                </div>
                <div onClick={()=>setActiveDrop8(!activeDrop8)} className="drop">
                    <div className="flexFaq">
                        <p className="title">How are payments to investors organized?</p>
                        <FaAngleDown className={activeDrop8 && 'active'}/>
                    </div>
                    <p className={activeDrop8 ? 'activeDown down' : 'down'}>
                    </p>
                </div>
                <div onClick={()=>setActiveDrop9(!activeDrop9)} className="drop">
                    <div className="flexFaq">
                        <p className="title">How is the contract signed?</p>
                        <FaAngleDown className={activeDrop9 && 'active'}/>
                    </div>
                    <p className={activeDrop9 ? 'activeDown down' : 'down'}>
                        .To sign all the documents required to become an investor, a simple electronic signature in the form of SMS is used. Also, all documents will be available in your personal account.
                    </p>
                </div>
                <div onClick={()=>setActiveDrop10(!activeDrop10)} className="drop">
                    <div className="flexFaq">
                        <p className="title">How are investment objects checked?</p>
                        <FaAngleDown className={activeDrop10 && 'active'}/>
                    </div>
                    <p className={activeDrop10 ? 'activeDown down' : 'down'}>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Faq