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
  flex-wrap: wrap;
`;

export const Link = styled.a`
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
  }
`;

export const TableWarp = styled.div`
  overflow-x: auto;
  height: 300px;
`;

export const DatePicker = styled.input`
  ::-webkit-calendar-picker-indicator {
    margin-left: 1px;
  }
`;

export const AddInfoP = styled.p`
  margin: 5px;
`;

export const ThDiv = styled.span`
  display: flex;
  align-items: center;
`;

export const SortByP = styled.p`
  margin: 0;
`;
