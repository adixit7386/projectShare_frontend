import React, { useState } from "react";
import Styled from "styled-components";
import SearchProject from "./SearchProject";
import SearchPeople from "./SearchPeople";
import { useSelector } from "react-redux";
let nightMode = true;
const Container = Styled.div`

background-color:${(props) => (nightMode ? "#292929" : "white")};
color:${(props) => (nightMode ? "white" : "black")};
position:sticky;
height:calc(100vh - 60px);
overflow:scroll;
&::-webkit-scrollbar{
  display:none;
}

`;

const Header = Styled.div`
padding:10px 20px;
display:flex;
align-items:center;

justify-content:space-between;`;

const Select = Styled.select`
background-color:${(props) => (nightMode ? "#292929" : "white")};
color:${(props) => (nightMode ? "white" : "black")};
font-size:18px;
border:none;
padding:7px 12px;
&:focus{
  outline:none;
}`;
const Option = Styled.option`
padding:5px 9px;`;
const Home = () => {
  nightMode = useSelector((state) => state.nightmodebar.toggle);
  const [filter, setFilter] = useState("People");

  return (
    <Container>
      <Header>
        <Select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <Option>People</Option>
          <Option>Projects</Option>
        </Select>
      </Header>
      {filter === "People" ? (
        <>
          <SearchPeople></SearchPeople>
          <SearchPeople></SearchPeople>
          <SearchPeople></SearchPeople>
          <SearchPeople></SearchPeople>
          <SearchPeople></SearchPeople>
        </>
      ) : (
        <>
          <SearchProject></SearchProject>
          <SearchProject></SearchProject>
          <SearchProject></SearchProject>
          <SearchProject></SearchProject>
          <SearchProject></SearchProject>
        </>
      )}
    </Container>
  );
};

export default Home;
