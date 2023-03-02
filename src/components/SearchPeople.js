import React from "react";
import Styled from "styled-components";
import { useSelector } from "react-redux";
let nightMode = true;
const PeopleContainer = Styled.div`
background-color:${(props) => (nightMode ? "#1F1F1F" : "#f8f9fa")};
color:${(props) => (nightMode ? "white" : "black")};
cursor:pointer;
margin:10px 20px;
display:flex;
align-items:flex-start;
justify-content:center;

border-radius:10px;
padding:7px 12px;

&:hover{

  transform:scale(1.01);
}

`;
const DetailContainer = Styled.div`
flex:1.5;
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
`;
const NameContainer = Styled.div``;
const NameText = Styled.span`
font-weight:600;
font-size:24px;`;

const RoleContainer = Styled.div``;
const RoleText = Styled.span`
font-size:20px;`;
const StatusContainer = Styled.div``;
const StatusText = Styled.span`
color:green;
font-size:18px;
font-weight:500;`;
const LinkContainer = Styled.div``;
const LinkText = Styled.span``;
const ProfileContainer = Styled.div`
flex:0.5;`;
const DescriptionContainer = Styled.div`
flex:2;`;
const ParagraphContainer = Styled.p`
color:grey;
font-weight:500;`;
const ImageContainer = Styled.div``;
const Img = Styled.img`
height:100px;
height:100px;
border-radius:50%;`;
const Projects = () => {
  nightMode = useSelector((state) => state.nightmodebar.toggle);
  return (
    <PeopleContainer>
      <DetailContainer>
        <NameContainer>
          <NameText>Abhay Dixit</NameText>
        </NameContainer>
        <RoleContainer>
          <RoleText>BA3 intern @Barclays</RoleText>
        </RoleContainer>
        <StatusContainer>
          <StatusText>2h mon-friday</StatusText>
        </StatusContainer>
        <LinkContainer>
          <a href="https://www.github.com/adixit7386">
            <LinkText>Github</LinkText>
          </a>
        </LinkContainer>
      </DetailContainer>
      <ProfileContainer>
        <ImageContainer>
          <Img
            src={
              "https://avatars.githubusercontent.com/u/92564357?s=400&u=58b28bd8ecfca5ffe4952d03c521b70fe047df68&v=4"
            }
          />
        </ImageContainer>
      </ProfileContainer>
      <DescriptionContainer>
        <ParagraphContainer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          culpa expedita odio veniam soluta consequuntur nemo iure, earum harum
          exercitationem, explicabo.
        </ParagraphContainer>
      </DescriptionContainer>
    </PeopleContainer>
  );
};

export default Projects;
