import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const ButtonListItem = styled.li`
  border-radius: 4px;
  box-shadow: 4px 4px 13px 0px rgba(17, 17, 17, 0.75);
  -webkit-box-shadow: 4px 4px 13px 0px rgba(17, 17, 17, 0.75);
  -moz-box-shadow: 4px 4px 13px 0px rgba(17, 17, 17, 0.75);
  transition: scale 150ms ease-in;
  &:active {
    scale: 0.95;
  }
  &:nth-child(1) button {
    border: 1px solid ${({ theme: { colors } }) => colors.colorGood};
    &:is(:hover, :focus) {
      color: white;
      background-color: ${({ theme: { colors } }) => colors.colorGood};
    }
  }
  &:nth-child(2) button {
    border: 1px solid ${({ theme: { colors } }) => colors.colorNeutral};
    &:is(:hover, :focus) {
      color: white;
      background-color: ${({ theme: { colors } }) => colors.colorNeutral};
    }
  }
  &:nth-child(3) button {
    border: 1px solid ${({ theme: { colors } }) => colors.colorBad};
    &:is(:hover, :focus) {
      color: white;
      background-color: ${({ theme: { colors } }) => colors.colorBad};
    }
  }
`;

export const Button = styled.button`
  text-transform: capitalize;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: background-color 250ms ease-in, color 250ms ease-in;
`;
