import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import SearchProject from "./SearchProject";
import SearchPeople from "./SearchPeople";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
let nightMode = true;
const Container = Styled.div`
max-width:100vw;
background-color:${(props) => (nightMode ? "#292929" : "white")};
color:${(props) => (nightMode ? "white" : "black")};
position:sticky;
height:calc(100vh - 60px);

&::-webkit-scrollbar{
  display:none;
}

`;

const Header = Styled.div`
padding:10px 20px;
display:flex;
align-items:center;

justify-content:space-between;`;
const Loaders = Styled.div`
padding:10px 20px;
display:flex;
align-items:center;

justify-content:center;`;

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
  const user = useSelector((state) => state.user.currentUser);
  const [peopleLoading, setPeopleLoading] = useState(false);
  const [projectLoading, setProjectLoading] = useState(false);
  const [filter, setFilter] = useState("People");
  const [projects, setProjects] = useState([]);
  const [people, setPeople] = useState([]);

  let location = useLocation();
  location = location.pathname.split("/");
  let search = location[2];

  useEffect(() => {
    const fetchPeople = async () => {
      setPeopleLoading(true);
      try {
        const res = search
          ? await axios.get(
              `http://localhost:5000/api/profile?search=${search}`,
              {
                headers: { Authorization: `Bearer ${user.accessToken}` },
              }
            )
          : await axios.get("http://localhost:5000/api/profile", {
              headers: { Authorization: `Bearer ${user.accessToken}` },
            });
        setPeople(res.data);
      } catch (error) {
        console.log(error);
      }
      setPeopleLoading(false);
    };
    fetchPeople();
  }, [search, user.accessToken]);

  useEffect(() => {
    const fetchProjects = async () => {
      setProjectLoading(true);
      try {
        let res = search
          ? await axios.get(
              `http://localhost:5000/api/project?search=${search}`,
              {
                headers: { Authorization: `Bearer ${user.accessToken}` },
              }
            )
          : await axios.get("http://localhost:5000/api/project", {
              headers: { Authorization: `Bearer ${user.accessToken}` },
            });
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      }
      setProjectLoading(false);
    };
    fetchProjects();
  }, [search, user.accessToken]);

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
          {peopleLoading && (
            <Loaders>
              <Loader />
            </Loaders>
          )}
          {people?.map((item) => (
            <SearchPeople key={item._id} item={item} />
          ))}
        </>
      ) : (
        <>
          {projects.map((item) => (
            <SearchProject key={item.id} item={item} />
          ))}
        </>
      )}
    </Container>
  );
};

export default Home;
