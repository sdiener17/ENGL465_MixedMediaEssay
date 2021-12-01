import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function RenderText({ toRender }) {
  const map = Array.prototype.map;
  function Delayed_render(async_fun) {
    const [output, setOutput] = useState();
    useEffect(async () => setOutput(await async_fun()), []);
    return output === undefined ? null : output;
  }
  const DisplayBinary = () => {
    let toReturn = map.call(toRender, (i) => {
      //for (const i of toRender)
      //let i = 0; i < toRender.length; i++
      console.log(i + " " + toRender.length);
      return Delayed_render(async () => {
        let rand = getRandomInt(800, 800);
        await sleep(1000);
        return <div className="oneCharAtTime">{i}</div>;
      });
    });
    return <div className="oneCharAtTime">{toReturn}</div>;
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  return (
    <PageWrapper>
      <DisplayBinary />
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  .oneCharAtTime {
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
  }
`;
