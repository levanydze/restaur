import React from "react";
import { styled } from "styled-components";

function HoursMap() {
  return (
    <WRAPPER>
      <MAPBOX>
        <MAP></MAP>
      </MAPBOX>
      <TEXTBOX>
        <N1></N1>
        <N2></N2>
        <N3></N3>
      </TEXTBOX>
    </WRAPPER>
  );
}

export default HoursMap;

const WRAPPER = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;
const MAPBOX = styled.div`
  display: flex;
`;
const MAP = styled.div`
  display: flex;
`;
const TEXTBOX = styled.div`
  display: flex;
`;
const N1 = styled.div`
  display: flex;
`;
const N2 = styled.div`
  display: flex;
`;
const N3 = styled.div`
  display: flex;
`;
