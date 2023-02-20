import React, { useState } from "react";
import Styled from "styled-components";
import SearchProject from "./SearchProject";
import SearchPeople from "./SearchPeople";
const Container = Styled.div``;
const Header = Styled.div`
margin:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;`;

const Select = Styled.select`

font-size:18px;
border:none;
padding:7px 12px;
&:focus{
  outline:none;
}`;
const Option = Styled.option`
padding:5px 9px;`;
const Home = () => {
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
