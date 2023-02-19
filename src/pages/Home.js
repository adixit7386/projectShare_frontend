import React from "react";
import Navbar from "../components/Navbar";
import Styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
const Container = Styled.div``;
const Wrapper = Styled.div`

display:flex;
align-items:flex-start;
justify-content:center;

`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Content />
      </Wrapper>
    </Container>
  );
};

export default Home;
