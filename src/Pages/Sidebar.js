import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  // return (
  //   <PageWrapper>
  //     <div>
  //       <Link to="/">Original Generator Page</Link>
  //       {isLoggedIn && (
  //         <div>
  //           <Link to="/spicygenerator">Spicy Generator Page</Link>
  //           <Link>Table Info</Link>
  //           <Link>Edit/Add Tables</Link>
  //         </div>
  //       )}
  //     </div>
  //   </PageWrapper>
  // );

  const location = useLocation();
  //var to get the current page the user is on for highlighting that page
  //on the navbar
  let pageName = location.pathname.replaceAll("/", "");
  const [homeLit, setHomeLit] = useState(false);
  const [registerLit, setRegisterLit] = useState(false);
  //the current page the user is on. If they're on the homepage, replace
  //the empty string with "home", otherwise use 'pageName'
  const [currentPage, setCurrentPage] = useState(
    pageName === "" ? "home" : pageName
  );

  return (
    <SideWrapper>
      <ul>
        <li key={1}>
          <Link
            to="/"
            className={
              "sidebar-link " + (currentPage === "home" ? "lit" : "unlit")
            }
            id="homeLink"
            onClick={() => setCurrentPage("home")}
          >
            The Title
          </Link>

          <Link
            to="/thecontent"
            className={
              "sidebar-link " + (currentPage === "thecontent" ? "lit" : "unlit")
            }
            id="theContentLink"
            onClick={() => setCurrentPage("thecontent")}
          >
            The Content
          </Link>
          <Link
            to="/thecontent2"
            className={
              "sidebar-link " +
              (currentPage === "thecontent2" ? "lit" : "unlit")
            }
            id="theContent2Link"
            onClick={() => setCurrentPage("thecontent2")}
          >
            The Content 2.0
          </Link>
          <Link
            to="thedemo"
            className={
              "sidebar-link " + (currentPage === "thedemo" ? "lit" : "unlit")
            }
            id="theDemoLink"
            onClick={() => setCurrentPage("thedemo")}
          >
            The Demo
          </Link>
          <Link
            to="thecredits"
            className={
              "sidebar-link " + (currentPage === "thecredits" ? "lit" : "unlit")
            }
            id="theCreditsLink"
            onClick={() => setCurrentPage("thecredits")}
          >
            The Credits
          </Link>
        </li>
      </ul>
    </SideWrapper>
  );
}

const SideWrapper = styled.nav`
  //position:fixed;
  //top:200px;
  //left:50px;
  //width: 60px;
  height: 180px;
  background: var(--mainGrey);
  //z-index:1;
  //border-right:4px solid var(--primaryColor);
  //border-bottom:4px solid var(--primaryColor);
  //border-left:4px solid var(--primaryColor);
  //border-top:4px solid var(--primaryColor);
  transition: var(--mainTransition);
  font-size: 20px !important;

  margin: 10px;
  ul {
    list-style-type: none;
    padding: 0 !important;
  }
  .sidebar-link {
    display: block;
    //font-size: 1.5rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    font-size: 20px;
    transition: var(--mainTransition);
    text-decoration: none;
    width: 80%;
  }
  .sidebar-link:hover {
    background: #9b9b9b;
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  .lit {
    color: var(--mainWhite);
    background: var(--fifthSiteColor);
  }
  .unlit {
    color: var(--mainBlack);
    background: var(--lightGrey);
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
