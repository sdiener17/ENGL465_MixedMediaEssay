import logo from "./logo.svg";
import "./App.css";
import Title from "./Pages/Title";
import Header from "./Pages/Header";
import styled from "styled-components";
import Sidebar from "./Pages/Sidebar";
import { Route, Routes } from "react-router";
import TheBeginnings from "./Pages/TheBeginnings";

export default function App() {
  return (
    <PageWrapper>
      <Header />

      <div className="contentWrapper">
        <Sidebar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route exact path="/" render={(props) => <Title />} />
          <Route
            exact
            path="/thebeginnings"
            render={(props) => <TheBeginnings />}
          />
        </Routes>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  //display:flex;
  .contentWrapper {
    display: flex;
    flex-direction: row;
    align-items: left;
  }
`;
