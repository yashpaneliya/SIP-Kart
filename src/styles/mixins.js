import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: ${({ theme }) => theme.color};
      color: white;
    `}
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  width: inherit;
  border: none;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};

  &:focus {
    outline: none;
  }
`;

const mixins = {
  Button,
  Input,

  flexBetween: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,

  flexRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
};

export default mixins;
