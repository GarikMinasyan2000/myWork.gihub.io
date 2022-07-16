import './App.scss';
import Header from './layouts/header/header';
import HomePage from './homePage/homePage';
import Footer from './layouts/footer/footer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Credit from './creditPage/creditPage';
// import Collateral from './collateral/collateral';
import Buy from './buyPage/buyPage';
import SellPage from './sellPage/sellPage';
import DepositPage from './depositPage/depositPage';
import TranferPage from './transferPage/transferPage';
import LoginPage from './layouts/header/loginPage/loginPage';
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
          <Route path='/credit' element={<Credit />}></Route>
          <Route path='/buy' element={<Buy />}></Route>
          <Route path='/sell' element={<SellPage/>}></Route>
          <Route path='/deposite' element={<DepositPage/>}></Route>
          <Route path='/transfer' element={<TranferPage/>}></Route>
        </Routes>
        {/* <Collateral/> */}
      <Footer  scroll={scrollUp}/>
    </BrowserRouter>
  );
}

export default App;
