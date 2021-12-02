import React from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import background2 from "../Images/background2.jpg";

export default function TheBeginnings({ setBackground }) {
  useEffect(() => {
    setBackground(background2);
  }, []);

  let line1 =
    "//Working on a project for a class Spring 2020 (Freshman year of college)";
  let line2 = "laptop.startUp();";
  let line3 = "elephantOnChest = true;";
  let line4 = "mainProjectTopic = “Recursion”;";
  let line5 =
    "recursion.associations = {“Anxiety”, “Dread”, “Feeling Inadequate”, “Too Difficult”};";
  let line6 = "project.start();";
  let line7 = "while(workingOnProject){";
  let line8 = "feelStupid = true;";
  let line9 = "strainBrain = true;";
  let line10 = "while(attemptedSolutionWorks NOT true){";
  let line11 = "frustration++;";
  let line12 = "failureCounter++;";
  let line13 = "feelingsOfInadequacy++;";
  let line14 = "}";
  let line15 = "if(timeElapsedOnProblem > 60){";
  let line16 = "askForHelp();";
  let line17 = "failureCounter++;";
  let line18 = "}";
  let line19 = "questionMajor = true;";
  let line20 = "bool x = getReassurance();";
  let line21 = "if(x == true){";
  let line22 = "continue;";
  let line23 = "}";
  let line24 = "else{";
  let line25 = "frustration++;";
  let line26 = "confusion++;";
  let line27 = "}";
  let line28 = "}";

  return (
    <PageWrapper>
      <div>{line1}</div>
      <div>{line2}</div>
      <div>{line3}</div>
      <div>{line4}</div>
      <div>{line5}</div>
      <div>{line6}</div>
      <div>{line7}</div>
      <div>&nbsp;{line8}</div>
      <div>&nbsp;{line9}</div>
      <div>&nbsp;{line10}</div>
      <div>&nbsp;&nbsp;{line11}</div>
      <div>&nbsp;&nbsp;{line12}</div>
      <div>&nbsp;&nbsp;{line13}</div>
      <div>&nbsp;{line14}</div>
      <div>&nbsp;{line15}</div>
      <div>&nbsp;{line16}</div>
      <div>&nbsp;{line17}</div>
      <div>&nbsp;{line18}</div>
      <div>&nbsp;{line19}</div>
      <div>&nbsp;{line20}</div>
      <div>&nbsp;{line21}</div>
      <div>&nbsp;{line22}</div>
      <div>&nbsp;{line23}</div>
      <div>&nbsp;{line24}</div>
      <div>&nbsp;{line25}</div>
      <div>{line26}</div>
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
`;
