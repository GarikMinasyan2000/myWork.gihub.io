import { Link } from 'react-router-dom'
import './regVerifPage.scss'



const RegVerifPage = () => {


    return(
        <div className='verifPage'>
        <Link className='verif' to='/verified'>verified</Link>
            <div className="verifContainer">
                    <h1>Verify Your Email</h1>
                    <div className="icon">
                        <span className="icon-Illustration-small">
                            <span className="icon-Illustration-small path1"></span>
                            <span className="icon-Illustration-small path2"></span>
                            <span className="icon-Illustration-small path3"></span>
                            <span className="icon-Illustration-small path4"></span>
                            <span className="icon-Illustration-small path5"></span>
                            <span className="icon-Illustration-small path6"></span>
                            <span className="icon-Illustration-small path7"></span>
                        </span>
                    </div>
                    <div className='text'>To continue the procces pelase cheak yor email 
                        <p className='bold'>namesurname@mail.com</p>
                        and click the link to verify your account.
                    </div>
                    <div className="bottom">
                        <span className='black'>Email not received?</span>
                        <span className='purple'>Resend</span>
                    </div>
            </div>
        </div>
    )
}


export default RegVerifPage