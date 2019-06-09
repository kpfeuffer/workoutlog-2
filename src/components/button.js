import styled from "styled-components";

export const Colors = {
  primary: "#4e1c81",
  secondary: "#F8BA69",
  tertiary: "#45FAD6"
};

export function getComplementaryColor(color) {
  if(typeof color == "object") color = color.color;

  switch (color) {
    case Colors.primary: {
      return Colors.secondary;
    }
    case Colors.secondary: {
      return Colors.primary;
    }
    case Colors.tertiary: {
      return Colors.primary;
    }
    default:
      return "#000";
  }
}

export const PButton = styled.button`
  border: none;
  background: ${({ color }) => color || "transparent"};
  border-radius: 5pt;
  box-shadow: 1px 2px 2px 2px ${({ color }) => color || "rgba(0,0,0,0.18)"};
  padding: 0.5rem 1rem;
  color: ${getComplementaryColor};
  &:active {
    box-shadow: none;
    border: 1px solid ${getComplementaryColor};
  }
`;
