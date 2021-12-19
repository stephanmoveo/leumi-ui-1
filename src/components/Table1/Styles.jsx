import styled from "styled-components";

 const Styles = styled.div`
  padding: 1rem;
  margin: auto;
  width: 50%;
  position: relative;
  table {
    border-spacing: 0;
    thead {
      background-color: #fafbfc;
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

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      /* border-bottom: 1px solid black; */
      /* border-right: 1px solid black; */

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
