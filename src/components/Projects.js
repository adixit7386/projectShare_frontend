import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SearchProjects from "./SearchProject";
const Container = Styled.div`
`;
const Wrapper = Styled.div`
`;
const Header = Styled.div`
margin:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;`;
const Heading = Styled.h1`
margin:0px;`;
const Button = Styled.button`
border:none;
font-size:24px;
background-color:black;
border-radius:10px;
color:white;
transition:all 0.3s ease;
&:hover{
  transform:scale(1.01);
  cursor:pointer;
}
padding:8px 15px;`;

const Projects = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Header>
          <Heading>My Projects</Heading>
          <Button
            onClick={() => {
              navigate("new");
            }}
          >
            Create New Project
          </Button>
        </Header>
        <SearchProjects></SearchProjects>
      </Wrapper>
    </Container>
  );
};

export default Projects;
