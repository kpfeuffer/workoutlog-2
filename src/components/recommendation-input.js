import React from "react";
import styled from "styled-components";
import { Colors } from "./button";

const Container = styled.div`
  position: relative;
  text-align: center;
  margin: auto;
  /* max-width:50vw; */
`;

const Input = styled.input`
  border: none;
  width: calc(100% - 2rem);
  padding: 0.5rem 1rem;
  box-shadow: 1px 2px 2px 2px ${({ color }) => color || "rgba(0,0,0,0.18)"};
  transition: box-shadow 0.5s;
  &:active,
  &:focus {
    box-shadow: 2px 4px 4px 4px ${({ color }) => color || "rgba(0,0,0,0.18)"};
  }
`;
const RecommendationContainer = styled.form`
  position: absolute;
  display: ${({ active }) => (active ? "block" : "none")};
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 4px 4px 4px ${({ color }) => color || "rgba(0,0,0,0.18)"};
`;

const Recommendation = styled.button`
  padding: 1rem 1rem;
  text-align: center;
  display: block;
  margin: auto;
  background: none;
  border: none;
  width: 100%;
  &:hover,
  &:active {
    background-color: #ccc;
  }
`;

export default function RecommendationInput({
  text,
  setText,
  recommendations
}) {
  const [active, setActive] = React.useState(false);
  const rec = recommendations
    .filter(reco => reco.toLowerCase().indexOf(text.toLowerCase()) > -1)
    .map((reco, i) => (
      <Recommendation
        key={i}
        onClick={() => {
          setText(reco);
          setActive(false);
        }}
      >
        {joinWithComponent(reco.split(text), <b>{text}</b>)}
      </Recommendation>
    ));
  return (
    <Container>
      <Input
        color={Colors.secondary}
        onFocus={() => setActive(true)}
        onBlur={() => {
          // The Blur is applied before the click happens on recommendations
          setTimeout(() => active && setActive(false), 300);
        }}
        type="text"
        value={text}
        onChange={e => {
          console.log(e.target.value);
          setText(e.target.value);
        }}
      />
      <RecommendationContainer
        color={Colors.secondary}
        onSubmit={e => {
          console.log(e);
          e.preventDefault();
        }}
        active={active}
      >
        {rec}
      </RecommendationContainer>
    </Container>
  );
}

function joinWithComponent(strArray, withObj) {
  let resultArray = [];
  strArray.forEach((str, i) => {
    resultArray.push(str);
    if (i < strArray.length - 1) {
      resultArray.push(withObj);
    }
  });
  return resultArray;
}
