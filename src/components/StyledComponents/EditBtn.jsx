import styled from "styled-components";

export const EditBtn = styled.div`
  display: flex;
  color: #126cf9;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 0 0;

  svg {
    margin-bottom: -8px;
    width: 16px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
    align-items: center;
`;


export const Link = styled.a`
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;