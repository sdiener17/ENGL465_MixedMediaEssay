import React from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import background2 from "../Images/background2.jpg";

export default function TheBeginnings({ setBackground }) {
  useEffect(() => {
    setBackground(background2);
  }, []);

  return (
    <PageWrapper>
      <div>Hello from this page</div>
    </PageWrapper>
  );
}

const PageWrapper = styled.nav`
  display: flex;
`;
