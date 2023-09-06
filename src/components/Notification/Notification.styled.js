import styled from 'styled-components';

export const Message = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.colorNote};
`;
