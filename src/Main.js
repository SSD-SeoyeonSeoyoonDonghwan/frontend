import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
// import Nav from './components/Nav'
import MyPage from './pages/MyPage'
import LoginPage from "./pages/LoginPage";
import SignInPage1 from './pages/SignInPage1'
import SignInPage2 from './pages/SignInPage2'
import SignInPage3 from './pages/SignInPage3'
import StatisticsPage from "./pages/StatisticsPage";
import BattlePage from "./pages/BattlePage";
import ChatPage from "./pages/ChatPage";
import style from './main.module.css'
import RedirectPage from "./pages/RedirectPage";

export default function Main() {
    return (
      <div className={style.body}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/LoginPage" element={<LoginPage />}/>
                <Route path="/SignInPage1" element={<SignInPage1 />}/>
                <Route path="/SignInPage2" element={<SignInPage2 />}/>
                <Route path="/SignInPage3" element={<SignInPage3/>}/>
                <Route path="/MainPage" element={<MainPage />}/>
                <Route path="/StatisticsPage" element={<StatisticsPage />}/>
                <Route path="/BattlePage" element={<BattlePage />}/>
                <Route path="/ChatPage" element={<ChatPage />}/>
                <Route path="/MyPage" element={<MyPage />}/>
                <Route path="/Kakao/Oauth" element={<RedirectPage />}/>
                
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
