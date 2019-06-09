import React from "react";
import styled from "styled-components";
import { PButton, Colors } from "./button";

const PickerContainer = styled.dialog`
  display: ${({ visible }) => (visible === true ? "block" : "none")};
  border-width: 0;
  box-shadow: 2pt 6pt 6pt 6pt rgba(0, 0, 0, 0.18);
  border-radius: 5pt;
  width: auto;
  background-color: ${Colors.secondary};
  padding-bottom: 24pt;
`;

const Line = styled.div`
  border: 1pt solid ${Colors.primary};
  height: 0px;
  width: 90%;
  left: 0;
  border-radius: 5pt;
  text-align: center;
  position: absolute;
  margin: 0 5%;
`;

const ActiveLine = styled.div`
  border: 1pt solid ${Colors.tertiary};
  position: absolute;
  height: 0px;
  width: ${({ percentage }) => percentage - 5}%;
  left: 0;
  border-radius: 5pt;
  text-align: center;
  margin: 0 5%;
  margin-right: calc(${({ percentage }) => 100 - (5 + percentage)}% +5pt);
  /* transition: all 0.3s; */
`;

const Picker = styled.div`
  cursor: move;
  background-color: ${({ color }) => color};
  height: 10pt;
  width: 10pt;
  left: 0;
  border-radius: 50%;
  text-align: center;
  margin: auto;
  position: absolute;
  z-index: 100;
  margin-top: -4.6pt;
  margin-left: calc(${({ percentage }) => percentage}% - 5pt);
  /* transition: all 0.3s; */
`;

const NumberIndicator = styled.div`
  background-color: ${({ color }) => color};
  color: ${({ color }) => color};
  height: 12pt;
  width: 1pt;
  left: 0;
  margin: auto;
  position: absolute;
  text-align: center;
  padding-top: 12pt;
  margin-top: -5pt;
  margin-left: calc(${({ percentage }) => percentage}% - 0.5pt);
`;

function getPickerPosition(x, width, marginPct = 0) {
  let percentage = marginPct / 100 + (x / width) * 100;
  if (percentage > 100 - marginPct) {
    return 100 - marginPct;
  } else if (percentage < marginPct) {
    return marginPct;
  } else {
    return percentage;
  }
}

const getPickerPercentage = (posPercent, marginPct = 0) =>
  50 - (50 - posPercent) * (50 / (50 - marginPct));

export default function NumberPicker({ number, setNumber }) {
  let [dialogVisible, setDialogVisible] = React.useState(false);
  let [pickerGrabbed, setPickerGrabbed] = React.useState(false);
  let [selectionPercentage, setSelectionPercentage] = React.useState(50);

  React.useEffect(() => {
    if (!pickerGrabbed) {
      let percentage = getPickerPercentage(selectionPercentage, 5);
      let desiredNumber = Math.round((number || 1) * (percentage / 50));
      console.log(desiredNumber);
      if (desiredNumber !== number && typeof setNumber === "function") {
        setNumber(desiredNumber);
        setSelectionPercentage(50);
      }
    }
  }, [selectionPercentage, pickerGrabbed, number, setNumber]);
  React.useLayoutEffect(() => {
    let unsetPickerGrabbed = () => setPickerGrabbed(false);
    let setPercentagePosition = e => {
      let pickerPosition = getPickerPosition(e.clientX, window.innerWidth, 5);
      setSelectionPercentage(pickerPosition);
    };
    if (pickerGrabbed) {
      window.addEventListener("mouseup", unsetPickerGrabbed);
      window.addEventListener("mousemove", setPercentagePosition);
    } else {
      window.removeEventListener("mouseup", unsetPickerGrabbed);
      window.removeEventListener("mousemove", setPercentagePosition);
    }
    return () => {
      window.removeEventListener("mouseup", unsetPickerGrabbed);
      window.removeEventListener("mousemove", setPercentagePosition);
    };
  }, [pickerGrabbed, selectionPercentage]);
  console.log(getSeparatorNumbers(number, 5));
  let separators = getSeparatorNumbers(number, 5).map((n, i) => (
    <NumberIndicator
      key={i}
      color={i > number ? Colors.primary : Colors.tertiary}
      percentage={n}
    >
      {i}
    </NumberIndicator>
  ));
  return (
    <div>
      <PButton
        onClick={() => setDialogVisible(!Boolean(dialogVisible))}
        color={Colors.secondary}
      >
        {number}
      </PButton>
      <PickerContainer visible={dialogVisible}>
        <Line />
        <ActiveLine percentage={selectionPercentage} />
        <Picker
          percentage={selectionPercentage}
          color={Colors.tertiary}
          onMouseDown={() => setPickerGrabbed(true)}
          onTouchStart={() => setPickerGrabbed(true)}
          onMouseUp={() => setPickerGrabbed(false)}
          onTouchEnd={() => setPickerGrabbed(false)}
          onDrag={() => setPickerGrabbed(true)}
          onDragEnd={() => setPickerGrabbed(false)}
        />
        {/* <NumberIndicator color={Colors.primary} percentage={10}/> */}
        {separators}
      </PickerContainer>
    </div>
  );
}

function getSeparatorNumbers(currentNumber, margin = 0) {
  let resultArr = [];
  // for(let i = 0; i < currentNumber; i++) {
  //   resultArr.push()
  // }
  let increase = Math.round(currentNumber / 10);

  for (let i = 0; i < (currentNumber || 1) * 2; i += increase || 1) {
    resultArr[i] = margin + (i / (currentNumber || 1)) * (50 - margin);
  }
  return resultArr;
}
