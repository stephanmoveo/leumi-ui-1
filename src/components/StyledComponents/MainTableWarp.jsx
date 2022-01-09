import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;
  box-shadow: -1px 2px 31px -5px rgba(0,0,0,0.75);
  font-family:leumi-font ;

  table {
    border-spacing: 0;
    direction: rtl;
    width: 100%;
    thead {
      background-color: #fafbfc;
      position: sticky;
      top: 0;
      z-index: 1;
      th {
        border-bottom: 1px solid #e9e9e9;
      }
    }
    tr {
      text-align: justify;

      :hover {
        background-color: #f1f4f9;
      }
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :nth-child(even) {
        background-color: #fafbfc;
      }
      :nth-child(even):hover {
        background-color: #f1f4f9;
      }
    }
    td {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      text-align: right;
      :last-child {
        border-right: 0;
      }

      .myinput {
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 1rem;
        margin: 0;
        border: 1px solid #d1d1d1;
        padding: 17px 3px;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

export default Styles;
