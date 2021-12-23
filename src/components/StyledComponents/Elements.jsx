import styled from "styled-components";

export const EditBtn = styled.div`
  display: flex;
  color: #126cf9;
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  margin: 0 10px 0 0;
  &:hover {
    cursor: pointer;
  }
  svg {
    margin-bottom: -8px;
    width: 24px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const FlexDivJusRight = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

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
  height: 400px;
  margin-top: 5px;
  border-bottom: 1px solid #dedede;
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

export const InputSelect = styled.select`
  height: 26px;
  border: 1px solid #d1d1d1;
  font-size: 15px;
`;

export const AddInfoDiv = styled.div`
  width: 33%;
  margin: 22px 0;
`;

export const PageNumberInput = styled.input`
  width: 100px;
  border: 2px #1876d1 solid;
  padding: 9px 10px;
  box-sizing: border-box;
  border-radius: 5px;
`;
export const SelectPages = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 2px #1876d1 solid;
  outline: 0;
`;
