import React, { useState, useEffect } from "react";
import styled from "styled-components";
import background2 from "../Images/background2.jpg";
import ExplanationModal from "./ExplanationModal";
import ReactAudioPlayer from "react-audio-player";
import OverworldDay from "../Music/OverworldDay.mp3";

export default function Content2({ setBackground }) {
  const [showLine1Modal, setShowLine1Modal] = useState(false);
  const [s2m, setS2M] = useState(false);
  const [s3m, setS3M] = useState(false);
  const [s4m, setS4M] = useState(false);
  const [s5m, setS5M] = useState(false);
  const [s6m, setS6M] = useState(false);
  const [s7m, setS7M] = useState(false);
  const [s8m, setS8M] = useState(false);
  const [s9m, setS9M] = useState(false);
  const [s10m, setS10M] = useState(false);
  const [s11m, setS11M] = useState(false);
  const [s12m, setS12M] = useState(false);
  const [s13m, setS13M] = useState(false);
  const [s14m, setS14M] = useState(false);
  const [s15m, setS15M] = useState(false);
  const [s16m, setS16M] = useState(false);
  const [s17m, setS17M] = useState(false);
  const [s18m, setS18M] = useState(false);
  const [s19m, setS19M] = useState(false);
  const [s20m, setS20M] = useState(false);
  const [s21m, setS21M] = useState(false);
  const [s22m, setS22M] = useState(false);
  const [s23m, setS23M] = useState(false);
  const [s24m, setS24M] = useState(false);
  const [s25m, setS25M] = useState(false);
  const [s26m, setS26M] = useState(false);
  const [s27m, setS27M] = useState(false);
  const [s28m, setS28M] = useState(false);
  useEffect(() => {
    setBackground(background2);
  }, []);

  let line1 =
    "//Working on a website for a class Fall 2021 (Junior year of college)";
  let line2 = "laptop.startUp();";
  let line3 = "excited = true;";
  let line4 = "mainProjectTopic = “Web development”;";
  let line5 =
    'webDevelopment.associations = {"Fun", "Engaging", "Understandable"};';
  let line6 = "project.start();";
  let line7 = "while(workingOnProject){";
  let line8 = "understandWhatIsGoingOn = true; //most of the time";
  let line9 = "feelStupid = false;";
  let line10 = "while(attemptedSolutionWorks NOT true){";
  let line11 = "if(timeWorkingOnSolution > 60){";
  let line12 = "frustration++;";
  let line13 = "}";
  let line14 = "else{";
  let line15 = "frustration += 0;";
  let line16 = "}";
  let line17 = "}";
  let line18 = "if(timeElapsedOnProblem > 60){";
  let line19 = "askForHelp();";
  let line20 = "failureCounter += 0;";
  let line21 = "}";
  let line22 = "else{";
  let line23 = "continueWorking();";
  let line24 = "}";
  let line25 = "}";

  return (
    <PageWrapper>
      <div className="textLine" onClick={() => setShowLine1Modal(true)}>
        {line1}
      </div>
      <ExplanationModal
        showModal={showLine1Modal}
        setShowModal={setShowLine1Modal}
        text="I was working on a project the Spring of my freshman year in college, the year we all got sent home due to COVID-19"
      />
      <div className="textLine" onClick={() => setS2M(true)}>
        {line2}
      </div>
      <ExplanationModal
        showModal={s2m}
        setShowModal={setS2M}
        text="I started up my laptop, "
      />
      <div className="textLine" onClick={() => setS3M(true)}>
        {line3}
      </div>
      <ExplanationModal
        showModal={s3m}
        setShowModal={setS3M}
        text="feeling like there was an elephant on my chest."
      />
      <div className="textLine" onClick={() => setS4M(true)}>
        {line4}
      </div>
      <ExplanationModal
        showModal={s4m}
        setShowModal={setS4M}
        text="The main project topic was recursion, a computer science concept where the solution depends on the solution to the same (but broken down) problem."
      />
      <div className="textLine" onClick={() => setS5M(true)}>
        {line5}
      </div>
      <ExplanationModal
        showModal={s5m}
        setShowModal={setS5M}
        text="Recursion was relatively new to me, and I struggled deeply with the concept. The word itself was enough to invoke feelings of anxiety and dread, and it continuously made me feel inadequate, as recursive problems were often too difficult for me to solve on my own."
      />
      <div className="textLine" onClick={() => setS6M(true)}>
        {line6}
      </div>
      <ExplanationModal
        showModal={s6m}
        setShowModal={setS6M}
        text="I finally worked up the nerve to start the project"
      />
      <div className="textLine" onClick={() => setS7M(true)}>
        {line7}
      </div>
      <ExplanationModal
        showModal={s7m}
        setShowModal={setS7M}
        text="While I was working on the project, "
      />
      <div className="textLine" onClick={() => setS8M(true)}>
        &nbsp;{line8}
      </div>
      <ExplanationModal
        showModal={s8m}
        setShowModal={setS8M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS9M(true)}>
        &nbsp;{line9}
      </div>
      <ExplanationModal
        showModal={s9m}
        setShowModal={setS9M}
        text="I felt stupid "
      />
      <div className="textLine" onClick={() => setS10M(true)}>
        &nbsp;{line10}
      </div>
      <ExplanationModal
        showModal={s10m}
        setShowModal={setS10M}
        text="and worked my brain as hard as it would go."
      />
      <div className="textLine" onClick={() => setS11M(true)}>
        &nbsp;&nbsp;{line11}
      </div>
      <ExplanationModal
        showModal={s11m}
        setShowModal={setS11M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS12M(true)}>
        &nbsp;&nbsp;{line12}
      </div>
      <ExplanationModal
        showModal={s12m}
        setShowModal={setS12M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS13M(true)}>
        &nbsp;&nbsp;{line13}
      </div>
      <ExplanationModal
        showModal={s13m}
        setShowModal={setS13M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS14M(true)}>
        &nbsp;{line14}
      </div>
      <ExplanationModal
        showModal={s14m}
        setShowModal={setS14M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS15M(true)}>
        &nbsp;{line15}
      </div>
      <ExplanationModal
        showModal={s15m}
        setShowModal={setS15M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS16M(true)}>
        &nbsp;{line16}
      </div>
      <ExplanationModal
        showModal={s16m}
        setShowModal={setS16M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS17M(true)}>
        &nbsp;{line17}
      </div>
      <ExplanationModal
        showModal={s17m}
        setShowModal={setS17M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS18M(true)}>
        &nbsp;{line18}
      </div>
      <ExplanationModal
        showModal={s18m}
        setShowModal={setS18M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS19M(true)}>
        &nbsp;{line19}
      </div>
      <ExplanationModal
        showModal={s19m}
        setShowModal={setS19M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS20M(true)}>
        &nbsp;{line20}
      </div>
      <ExplanationModal
        showModal={s20m}
        setShowModal={setS20M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS21M(true)}>
        &nbsp;{line21}
      </div>
      <ExplanationModal
        showModal={s21m}
        setShowModal={setS21M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS22M(true)}>
        &nbsp;{line22}
      </div>
      <ExplanationModal
        showModal={s22m}
        setShowModal={setS22M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS23M(true)}>
        &nbsp;{line23}
      </div>
      <ExplanationModal
        showModal={s23m}
        setShowModal={setS23M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS24M(true)}>
        &nbsp;{line24}
      </div>
      <ExplanationModal
        showModal={s24m}
        setShowModal={setS24M}
        text="Explanation"
      />
      <div className="textLine" onClick={() => setS25M(true)}>
        &nbsp;{line25}
      </div>
      <ExplanationModal
        showModal={s25m}
        setShowModal={setS25M}
        text="Explanation"
      />

      <ReactAudioPlayer
        src={OverworldDay}
        autoPlay={false}
        loop={true}
        controls={true}
      />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  .textLine {
  }
  .textLine:hover {
    font-size: 1.5rem;
  }
`;
