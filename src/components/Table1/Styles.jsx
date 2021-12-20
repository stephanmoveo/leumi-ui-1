import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    direction: rtl;
    thead {
      background-color: #fafbfc;
      position: sticky;
      top: 0;
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

      input {
        font-size: 1rem;
        padding: 0;
        margin: 0;
        border: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

export default Styles;
