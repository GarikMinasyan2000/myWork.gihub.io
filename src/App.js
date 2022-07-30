import './App.scss';
import Header from './layouts/header/header';
import HomePage from './homePage/homePage';
import Footer from './layouts/footer/footer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Credit from './creditPage/creditPage';
import Buy from './buyPage/buyPage';
import SellPage from './sellPage/sellPage';
import DepositPage from './depositPage/depositPage';
import TranferPage from './transferPage/transferPage';
import LoginPage from './layouts/header/loginPage/loginPage';
import RegisterPage from './layouts/header/registerPage/registerPage';
import RegVerifPage from './layouts/header/registerPage/regVerifPage/regVerifPage';
import SecretPage from './layouts/header/registerPage/regSecretPage/regSecretPage';

import Collateral from './collateral/collateral';
import Contacts from './contacts/contacts'
import Faq from './faq/faq';
import About from './about/about';
import MyAccount from './myAccount/myAccount';

function App() {

  const scrollUp = () => {
    window.scrollTo({
      top:0
    })
  }

  

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/verif' element={<RegVerifPage/>}></Route>
          <Route path='/verified' expand element={<SecretPage/>}></Route>
          <Route path='/credit' element={<Credit />}></Route>
          <Route path='/buy' element={<Buy />}></Route>
          <Route path='/sell' element={<SellPage/>}></Route>
          <Route path='/deposite' element={<DepositPage/>}></Route>
          <Route path='/transfer' element={<TranferPage/>}></Route>
          
          <Route path='/colateral' element={<Collateral/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/about' element={<About  scroll={scrollUp}/>}></Route>

          <Route path='/myAccount' element={<MyAccount/>}></Route>

        </Routes>
      <Footer  scroll={scrollUp}/>
    </BrowserRouter>
  );
}

export default App;
