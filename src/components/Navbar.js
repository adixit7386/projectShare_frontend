import React, { useState } from "react";
import Styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MailIcon from "@mui/icons-material/Mail";
import AccountContainer from "../components/AccountContainer";
import { useSelector, useDispatch } from "react-redux";
import { toggleNightMode } from "../redux/nightModeReducer";
import { toggleAccountBar } from "../redux/accountReducer";
let nightMode = true;
const Container = Styled.div`
display:flex;
align-items:center;
background-color:${(props) => (nightMode ? "#1F1F1F" : "#f8f9fa")};
color:${(props) => (nightMode ? "white" : "black")};

position:sticky;
z-index:2;
top:0px;
justify-content:center;
height:59px;
padding-left:20px;
padding-right:20px;
border-bottom:${(props) => (nightMode ? "#1F1F1F" : "1px solid lightgrey")};
`;
const Wrapper = Styled.div`
flex:1;
display:flex;
align-items:center;

justify-content:center;
`;
const Left = Styled.div`
flex:1;
display:flex;
align-items:center;;
justify-content:flex-start;

`;

const IconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const TitleContainer = Styled.div`
padding:0px 10px 0px 10px;


`;
const Title = Styled.h1`
margin: 0px auto 0px auto;
cursor:pointer;
font-size:32px;`;
const Span = Styled.span`
color:#0081B4;
font-size:32px;
`;
const Center = Styled.div`
flex:1.3;
display:flex;
align-items:center;
justify-content:center;`;

const InputContainer = Styled.div`
flex:9;
height:35px;
display:flex;
align-items:center;
jusify-content:center;
border:solid 1.5px gray;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
padding:2px 20px;
border-right:none;
`;

const Input = Styled.input`
background-color:${(props) => (nightMode ? "#1F1F1F" : "#f6f9fa")};
  color:${(props) => (nightMode ? "white" : "grey")};

font-size: 18px;
font-size: 18px;
flex: 1;
border:none;

height: 30px;
outline:none;
    
&:focus{
 font-size: 18px;
font-size: 18px;
flex: 1;
border:none;
background-color:${(props) => (nightMode ? "#1F1F1F" : "#f6f9fa")};
    color:${(props) => (nightMode ? "white" : "black")};
height: 35px;
outline:none;
}
  &:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus, 
&:-webkit-autofill:active{
   
    -webkit-box-shadow: ${(props) =>
      nightMode
        ? "0 0 0 30px #1F1F1F inset !important"
        : "0 0 0 30px #f6f9fa inset !important"};
    -webkit-text-fill-color: ${(props) => (nightMode ? "white" : "black")};
}

`;

const SearchIconContainer = Styled.div`
height:35px;
width:35px;
border-left:none;
display:flex;
align-items:center;
jusify-content:center;
border:solid 1.5px gray;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
padding:2px 4px;
`;

const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;`;

const UserContainer = Styled.div`
display:flex;
align-items:center;
height:40px;
width:40px;
border-radius:50%;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;



`;

const Img = Styled.img`
height:30px;
width:30px;
border-radius:50%;
filter:${() => nightMode && "invert(1)"};


`;

const DarkModeIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:5px 10px;`;
const MailIconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:5px 10px;`;

const Navbar = () => {
  const [search, setSearch] = useState("");
  nightMode = useSelector((state) => state.nightmodebar.toggle);
  const accountBar = useSelector((state) => state.accountbar.toggle);
  const dispatch = useDispatch();

  const handleSearch = () => {
    // console.log(search);
  };
  const IconStyle = {
    height: "35px",
    width: "35px",
    cursor: "pointer",
  };
  const IconStyleDarkMode = {
    height: "30px",
    width: "30px",
    color: "black",
    cursor: "pointer",
  };
  const IconStyleLightMode = {
    height: "30px",
    width: "30px",
    color: "white",
    cursor: "pointer",
  };
  const handleNightMode = () => {
    dispatch(toggleNightMode());
  };

  return (
    <Container>
      <AccountContainer toggle={accountBar} />
      <Wrapper>
        <Left>
          <IconContainer>
            <MenuRoundedIcon style={IconStyle} />
          </IconContainer>
          <TitleContainer>
            <Title>
              project<Span>Share</Span>
            </Title>
          </TitleContainer>
        </Left>
        <Center>
          <InputContainer>
            <Input
              placeholder="Search Projects or People"
              className="NavbarInput"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </InputContainer>
          <SearchIconContainer>
            <SearchRoundedIcon
              style={{
                height: "35px",
                width: "35px",
                cursor: "pointer",
                color: "gray",
              }}
            />
          </SearchIconContainer>
        </Center>
        <Right>
          <MailIconContainer>
            <MailIcon
              style={nightMode ? IconStyleLightMode : IconStyleDarkMode}
            />
          </MailIconContainer>
          <DarkModeIconContainer>
            {nightMode ? (
              <DarkModeIcon
                style={IconStyleLightMode}
                onClick={() => {
                  handleNightMode();
                }}
              />
            ) : (
              <LightModeIcon
                style={IconStyleDarkMode}
                onClick={() => {
                  handleNightMode();
                }}
              />
            )}
          </DarkModeIconContainer>
          <UserContainer clicked={true}>
            <Img
              onClick={() => {
                dispatch(toggleAccountBar());
              }}
              src={
                "https://cdn4.iconfinder.com/data/icons/man-user-human-person-business-profile-avatar/100/20-1User_13-512.png"
              }
            />
          </UserContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
