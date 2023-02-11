import React from "react";
import Styled from "styled-components";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Chats from "../components/Chats";
import Teams from "../components/Teams";
import Projects from "../components/Projects";
import { useLocation } from "react-router-dom";
const Container = Styled.div`
background-color:red;
flex:3.5;`;

const Content = () => {
  let Location = useLocation();
  Location = Location.pathname.split("/")[1];

  return (
    <Container>
      {Location === "home" && <Home />}
      {Location === "profile" && <Profile />}
      {Location === "chats" && <Chats />}
      {Location === "teams" && <Teams />}
      {Location === "projects" && <Projects />}
    </Container>
  );
};

export default Content;
