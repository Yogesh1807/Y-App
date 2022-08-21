import styled from "styled-components";

export const CustomLeafletStyle = styled.div`
  .leaflet-container {
    height: 500px;
  }
  h1 {
    text-align: center;
  }
  .pageTitle {
    background-color: ${(props) => props.selectedTheme.bgColor};
    color: white;
    padding: 20px;
    margin: 0 0 0.2rem 0;
    /* border:  ${(props) =>
      `0.4rem solid ${props.selectedTheme.icon.color}`}; */
    /* border-radius: 0.2rem; */
    opacity: 0.8;
  }
`;
