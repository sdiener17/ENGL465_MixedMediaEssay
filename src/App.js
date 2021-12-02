import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./Pages/Title";
import Header from "./Pages/Header";
import styled from "styled-components";
import Sidebar from "./Pages/Sidebar";
import { Route, Routes } from "react-router";
import TheBeginnings from "./Pages/TheBeginnings";
import LoginPage from "./Pages/LoginPage";
import background1 from "./Images/background1.jpg";
import Footer from "./Pages/Footer";
import Content2 from "./Pages/Content2";
import Credits from "./Pages/Credits";
import Demo from "./Pages/Demo";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [background, setBackground] = useState(background1);

  return (
    <PageWrapper>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Header />
        {!isLoggedIn && <LoginPage setIsLoggedIn={setIsLoggedIn} />}
        {isLoggedIn && (
          <div className="contentWrapper">
            <Sidebar />
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Routes>
              <Route
                exact
                path="/"
                element={<Title setBackground={setBackground} />}
              />

              <Route
                exact
                path="/thecontent"
                element={<TheBeginnings setBackground={setBackground} />}
              />
              <Route
                exact
                path="/thecontent2"
                element={<Content2 setBackground={setBackground} />}
              />
              <Route
                exact
                path="/thecredits"
                element={<Credits setBackground={setBackground} />}
              />
              <Route
                exact
                path="/thedemo"
                element={<Demo setBackground={setBackground} />}
              />
            </Routes>
          </div>
        )}
        <div className="separaterBottomFooter" />
        <Footer />
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  .separaterBottomFooter {
    margin-bottom: 60px;
  }
  //display:flex;
  height: 100%;
  .contentWrapper {
    display: flex;
    flex-direction: row;
    align-items: left;
  }
`;
