import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background3 from "../Images/background3.jpg";

export default function Credits({ setBackground }) {
  useEffect(() => {
    setBackground(background3);
  }, []);

  let line1 = "Credits";
  let line2 =
    "*All pictures taken by Sarah Diener or gathered from stock images available for free on PowerPoint";
  let line3 = '*Video 1 ("The Title" Page):';
  let line4 = "Demoed by Sarah Diener";
  let line5 = "Program by Sarah Diener";
  let line6 = "Music “Title Screen” by Re-Logic";
  let line7 = '*Music 1 ("The Content" Page):';
  let line8 = '"Underground" by Re-Logic';
  let line9 = "*Video 2 (slide 5):";
  let line10 = "Demoed by Sarah Diener";
  let line11 = "Music “Underground Hallow” and “Jungle” by Re-Logic";

  return (
    <PageWrapper>
      <h3>{line1}</h3>
      <div>{line2}</div>
      <div>{line3}</div>
      <div>&nbsp;&nbsp;{line4}</div>
      <div>&nbsp;&nbsp;{line5}</div>
      <div>&nbsp;&nbsp;{line6}</div>
      <div>{line7}</div>
      <div>&nbsp;&nbsp;{line8}</div>
      <div>{line9}</div>
      <div>&nbsp;&nbsp;{line10}</div>
      <div>&nbsp;&nbsp;{line11}</div>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;
