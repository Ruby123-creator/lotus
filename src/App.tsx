import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout/layout';
import Home from './component/pages/Home';


import './assets/css/style.css';


import HorseRacing from './component/pages/HorseRacing';
import GreyHoundRacing from './component/pages/GreyhoundRacing';
import LiveCasino from './component/pages/LiveCasino';
import SlotGameLobby from './component/pages/Slots';
import CrashGames from './component/pages/CrashGames';
import FishingGames from './component/pages/FishingGames';
import AviatorComp from './component/pages/Aviator';
import AuraComp from './component/pages/Aura';
import SportsEventPage from './component/pages/SportsEventPage';
import WithdrawComponent from './component/pages/withdraw';
import DepositComponent from './component/pages/Deposit';
import TransactionPage from './component/pages/Transaction';
import TransferStatement from './component/pages/TransferStatement';
import OpenBets from './component/pages/OpenBets';
import TimeSetting from './component/pages/Time-Setting';
import SportsDetail from './component/pages/SportsPage';
import Chnage_Password from './component/pages/ChangePasword';
import { useAdminDetails, useLoginVerificationQuery } from './Framework/login';
import { useUI } from './context/ui.context';
import DeclareBets from './component/pages/DeclareBets';
import CasinoGames from './component/pages/casino';
import CasinoReport from './component/pages/CasinoReport';


const App: React.FC = () => {
  const { setLoginData, isLoginAsUser, setUserData } = useUI();
  const [val, setValue] = useState<{ username?: string; uniqid?: string }>({});

  const { data: loginData } = useLoginVerificationQuery({
    username: val?.username || "",
    uniqid: val?.uniqid || "",
  });
const {data: userData} = useAdminDetails({isLogin:isLoginAsUser,username:val?.username})
  useEffect(() => {

    if (isLoginAsUser) {
      try {
        const storedData = localStorage.getItem("credentials");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (parsedData && typeof parsedData === "object") {
            setValue(parsedData);
            setLoginData(parsedData);
          }
        }

        
      } catch (error) {
        console.error("Error parsing credentials from localStorage:", error);
      }
    }
  }, [isLoginAsUser]);

  useEffect(()=>{
    setUserData(userData);
  },[userData])
  return(
    <Layout>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sports-page/:sportsName" element={<SportsDetail/>} />
       
        <Route path="/sports-page/Horse-Racing" element={<HorseRacing />} />
        <Route path="/sports-page/Greyhound-Racing" element={<GreyHoundRacing />} />
        <Route path="/casino-lobby/:casinoType" element={<CasinoGames />} />
       
        <Route path="/aviator" element={<AviatorComp />} />
        <Route path="/aura" element={<AuraComp />} />
         <Route path='/event-page/:sport/:eventId' element={<SportsEventPage/>}/>
            <Route path='/transactions' element={<TransactionPage/>}/>
            <Route path='/transfer-statement' element={<TransferStatement/>}/>
            <Route path='/betting-profit-loss' element={<TransferStatement/>}/>
         <Route path='/withdraw' element={<WithdrawComponent/>}/>
         <Route path='/deposit' element={<DepositComponent/>}/>
         <Route path='/account-statement' element={<TransferStatement/>}/>
         <Route path='/change-password' element={<Chnage_Password/>}/>

         <Route path='/my-bets' element={<OpenBets/>}/>
         <Route path='/declare-bets' element={<DeclareBets/>}/>
         <Route path='/casino-report' element={<CasinoReport/>}/>


         <Route path='/settings' element={<TimeSetting/>}/>
      </Routes>
    </Layout>
 
)};

export default App;
