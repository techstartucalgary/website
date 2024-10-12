import styled from "styled-components";

export enum ButtonMode {
  TRANSPARENT,
  DARK,
  GRADIENT,
}

interface HoverButtonStyleProps {
  mode: ButtonMode;
  glowOnHover?: boolean;
}

export const HoverButton = styled.div<HoverButtonStyleProps>`
  float: right;
  border: ${(props) => props.mode === ButtonMode.TRANSPARENT && "0.1rem solid"};
  border-radius: 30px;
  padding: 1rem 1rem;
  font-size: clamp(0.8rem, calc(2vw + 0.2rem), 1rem);
  transition: 0.3s ease-in-out;
  text-decoration: none;
  text-align: center;
  color: ${(props) =>
    props.mode === ButtonMode.DARK ? "white" : "var(--primary-black)"};
  background-color: ${(props) =>
    props.mode === ButtonMode.DARK && "var(--primary-black)"};
  background: ${(props) =>
    props.mode === ButtonMode.GRADIENT &&
    "linear-gradient(to top, var(--turquoise-blue), var(--turquoise-green))"};

  &: hover {
    cursor: pointer;
    transform: translateY(-0.25rem);
    box-shadow: ${(props) =>
      props.glowOnHover && "0 5px 15px rgba(145, 92, 182, 0.4)"};
  }

  @media (max-width: 900px) {
    padding: 0.5rem 1rem;
    &: hover {
      transform: none;
    }
  }
`;

export const HoverButtonDiv = styled.div`
  transition: 0.3s ease-in-out;

  &: hover {
    transform: translateY(-0.25rem);
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;

    &: hover {
      transform: none;
    }
  }
`;
