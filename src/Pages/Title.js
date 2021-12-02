import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RenderText from "./RenderText";
import Title2 from "../Videos/Title2.mp4";
import background4 from "../Images/background4.jpg";

export default function Title({ setBackground }) {
  let titleBinary = "01000011 01010011";
  //01000011 01010011
  let titleBinaryArray = [];

  useEffect(() => {
    setBackground(background4);
  }, []);

  return (
    <PageWrapper>
      <div className="title">
        {/* <RenderText toRender={titleBinary} /> */}
        <video width="750" height="500" controls>
          <source src={Title2} type="video/mp4" />
        </video>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  .title {
    display: flex;
    justify-content: center;
  }
`;
