import React from "react";

import Header from "../Header";
import Main from "../Main";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
    </AppContainer>
  );
}

export default App;
