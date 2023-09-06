import styled from 'styled-components';

export const StatList = styled.ul`
  width: 100%;
`;
export const StatListItem = styled.li`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
  text-transform: capitalize;
  transition: scale 150ms ease-in;
  &:active {
    scale: 0.95;
  }
  & > span {
    font-size: 24px;
    margin-left: 25px;
  }
  &:nth-child(1) > span {
    color: ${({ theme: { colors } }) => colors.colorGood};
  }
  &:nth-child(2) > span {
    color: ${({ theme: { colors } }) => colors.colorNeutral};
  }
  &:nth-child(3) > span {
    color: ${({ theme: { colors } }) => colors.colorBad};
  }
  &:nth-child(4) > span {
    color: ${({ theme: { colors } }) => colors.colorTotal};
  }
  &:nth-child(5) > span {
    color: ${({ theme: { colors } }) => colors.colorPercent};
  }
`;

export const ButtonReload = styled.button`
  margin-top: 18px;
  border: 1px solid red;
  border-radius: 4px;
  padding: 4px 12px;
  cursor: pointer;
  transition: color 150ms ease-in, background-color 150ms ease-in,
    scale 150ms ease-in;
  box-shadow: 4px 4px 13px 0px rgba(17, 17, 17, 0.75);
  -webkit-box-shadow: 4px 4px 13px 0px rgba(17, 17, 17, 0.75);
  -moz-box-shadow: 4px 4px 13px 0px rgba(17, 17, 17, 0.75);
  &:active {
    scale: 0.95;
  }
  &:is(:hover, :focus) {
    color: white;
    background-color: ${({ theme: { colors } }) => colors.colorNote};
  }
`;
