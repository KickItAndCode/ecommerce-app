import React, { useState } from "react";
import Styled from "styled-components";
import Directory from "../../components/directory/directory";

const HomePageContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
