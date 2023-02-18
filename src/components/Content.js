import React from "react";
import Styled from "styled-components";
import Home from "../components/Home";
import Profile from "../components/Profile";
import ViewProfile from "../components/ViewProfile";
import Chats from "../components/Chats";
import Teams from "../components/Teams";
import Projects from "../components/Projects";
import CreateProject from "../components/CreateProject";
import UpdateProject from "../components/UpdateProject";
import Project from "../components/Project";
import { useLocation } from "react-router-dom";

const Container = Styled.div`
position:sticky;
top:60px;
overflow:scroll;
height:calc(100vh - 60px);
&::-webkit-scrollbar{
  display:none;
}
flex:3.5;`;

const Content = () => {
  let Location = useLocation();

  Location = Location.pathname.split("/");

  let page = Location[1];

  // console.log(Location);
  return (
    <Container>
      {page === "home" && <Home />}

      {page === "profile" && Location.length <= 2 && <Profile />}
      {page === "profile" && Location.length > 2 && <ViewProfile />}
      {page === "chats" && <Chats />}
      {page === "teams" && <Teams />}
      {page === "projects" && Location.length <= 2 && <Projects />}
      {page === "projects" && Location.length > 2 && Location[2] === "new" && (
        <CreateProject />
      )}
      {page === "projects" &&
        Location.length > 2 &&
        Location[2] === "update" && <UpdateProject />}
      {page === "projects" &&
        Location.length > 2 &&
        Location[2] !== "update" &&
        Location[2] !== "new" && <Project />}
    </Container>
  );
};

export default Content;
