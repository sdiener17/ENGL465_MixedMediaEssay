import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CodingExample1Trimmed2 from "../Videos/CodingExample1Trimmed2.mp4";
import background1 from "../Images/background1.jpg";

export default function Demo({ setBackground }) {
  useEffect(() => {
    setBackground(background1);
  }, []);
  return (
    <PageWrapper>
      <div className="title">
        {/* <RenderText toRender={titleBinary} /> */}
        <h3>Demo Of Me Programming</h3>
        <video width="750" height="500" controls>
          <source src={CodingExample1Trimmed2} type="video/mp4" />
        </video>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  .title {
    display: flex;
    flex-direction: column;
    //justify-content: center;
  }
`;
