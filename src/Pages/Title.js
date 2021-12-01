import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RenderText from "./RenderText";
import Title2 from "../Videos/Title2.mp4";

export default function Title() {
  let titleBinary = "01000011 01010011";
  //01000011 01010011
  let titleBinaryArray = [];

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
  .title {
    display: flex;
    justify-content: center;
  }
`;
