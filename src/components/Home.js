import React from "react";
import Styled from "styled-components";
import SearchProject from "./SearchProject";
const Container = Styled.div``;

const Home = () => {
  return (
    <Container>
      <SearchProject></SearchProject>
      <SearchProject></SearchProject>
      <SearchProject></SearchProject>
    </Container>
  );
};

export default Home;
