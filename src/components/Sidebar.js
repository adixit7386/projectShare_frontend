import React from "react";
import Styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from "@mui/icons-material/Person2";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useSelector } from "react-redux";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useLocation, useNavigate } from "react-router-dom";
import { Mobile } from "../responsive";
let nightMode = true;
const Container = Styled.div`

flex:1;
height:calc(100vh - 60px);
position:sticky;
top:60px;
overflow:scroll;
&::-webkit-scrollbar{
  display:none;
}
background-color:${(props) => (nightMode ? "#1F1F1F" : "#f8f9fa")};
color:${(props) => (nightMode ? "white" : "black")};
${Mobile({
  display: (props) => props.sidebar && "none",
  position: "absolute",
  top: "0px",
  zIndex: "5",
  left: "0px",
  width: "200px",
})};
`;
const Wrapper = Styled.div`
display:flex;
align-items:flex-start;
justify-content:center;

padding:10px;`;

const Table = Styled.table`
border:none;

width:90%;`;
// const TableHeading=Styled.span``;
const Tr = Styled.tr`
margin-top:5px;

padding-top:10px; 
padding-bottom:10px; 
display:flex;
align-items:center;
border-radius:10px;
background-color:${(props) =>
  props.location === props.name
    ? nightMode
      ? "#292929"
      : "#f6f9fa"
    : nightMode
    ? "#1F1F1F"
    : "#f6f9fa"};
  
justify-content:center;



&:hover{
  transform:scale(1.01);
  cursor:pointer;
  background-color:${(props) => (nightMode ? "#292929" : "lightgrey")};;

}`;
const TdIcon1 = Styled.td`
display:flex;
align-items:center;
justify-content:center;
flex:1;`;
const TdText = Styled.td`
padding-left:10px;
flex:3;`;
const TdIcon2 = Styled.td`
flex:1;`;
const Heading = Styled.span`
font-size:18px`;
const Sidebar = () => {
  nightMode = useSelector((state) => state.nightmodebar.toggle);
  const sidebar = useSelector((state) => state.sidebar.toggle);

  const navigate = useNavigate();
  const IconStyle = {
    height: "30px",
    width: "30px",
  };
  let Location = useLocation();
  Location = Location.pathname.split("/")[1];

  const handleClick = (path) => {
    navigate("/" + path);
  };
  return (
    <Container className="child" sidebar={sidebar}>
      <Wrapper>
        <Table>
          <Tr
            location={Location}
            name={"home"}
            onClick={() => {
              handleClick("home");
            }}
          >
            <TdIcon1>
              <HomeIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Home</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>
          <Tr
            location={Location}
            name={"profile"}
            onClick={() => {
              handleClick("profile");
            }}
          >
            <TdIcon1>
              <Person2Icon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Profile</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>
          <Tr
            location={Location}
            name={"chats"}
            onClick={() => {
              handleClick("chats");
            }}
          >
            <TdIcon1>
              <ChatBubbleIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Chats</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>
          <Tr
            location={Location}
            name={"projects"}
            onClick={() => {
              handleClick("projects");
            }}
          >
            <TdIcon1>
              <AssignmentIcon style={IconStyle} />
            </TdIcon1>
            <TdText>
              <Heading>Projects</Heading>
            </TdText>
            <TdIcon2></TdIcon2>
          </Tr>
        </Table>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
