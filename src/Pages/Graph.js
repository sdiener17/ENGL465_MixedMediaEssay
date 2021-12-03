import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background5 from "../Images/background5.jpg";
import graph1 from "../Images/graph1.jpg";

export default function Graph({ setBackground }) {
  useEffect(() => {
    setBackground(background5);
  }, []);

  return (
    <PageWrapper>
      <h3>The Graph</h3>
      <img src={graph1} className="graphImg" />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin-bottom: 100px;
  //margin-left: 300px;
  display: flex;
  flex-direction: column;
  .graphImg {
    width: 70%;
    height: 70%;
  }
`;
