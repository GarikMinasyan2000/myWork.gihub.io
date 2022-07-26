import { Link } from 'react-router-dom'
import './options.scss'


const Options = () => {
    return(
        <div className="options">
            <h1>Options</h1>
            <div className="box">
                <div className="text">
                    <h1>Deposit</h1>
                    <p>You can make deposits and receive dividends at favorable interest rates</p>
                    <button> <Link to='/deposite'> Make a deposit</Link></button>
                </div>
                <div className="icon">
                    <i className="icon-VariantsDeposit"/>
                </div>
            </div>
            <div className="box">
                <div className="icon">
                    <i className="icon-VariantsCredit"/>
                </div>
                <div className="text">
                    <h1>Credit</h1>
                    <p>You can pledge cryptocurrencies and receive cDram or other cryptocurrencies on credit.</p>
                    <button> <Link to='/credit'>Get credit</Link></button>
                </div>
            </div>
            <div className="box">
                <div className="text">
                    <h1>Transfer</h1>
                    <p>Transfer You can send any amount of cDram to any user.</p>
                    <button> <Link to='/transfer'>Transfer cDram</Link></button>
                </div>
                <div className="icon">
                    <i className="icon-VariantsTransfer"/>
                </div>
            </div>
        </div>
    )
}

export default Options