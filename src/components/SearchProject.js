import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { validURL } from "../config/chatLogics";
let nightMode = true;
const ProjectContainer = Styled.div`
background-color:${(props) => (nightMode ? "#1F1F1F" : "#f8f9fa")};
color:${(props) => (nightMode ? "white" : "black")};
cursor:pointer;
margin:10px 20px;
display:flex;
align-items:flex-start;
justify-content:center;

border-radius:10px;
padding:7px 12px;
transition:all 0.3s ease;
&:hover{

  transform:scale(1.01);
}

`;
const DetailContainer = Styled.div`
flex:1;
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
`;

const TitleContainer = Styled.div`
font-weight:600;
flex:1;`;
const TitleText = Styled.span`
font-size:20px;`;

const PeopleContainer = Styled.div`

margin-top:10px;
display:flex;
overflow:scroll;
&::-webkit-scrollbar{
  display:none;
}`;
const ImgContainer = Styled.div`


height:50px;
width:50px;
margin-right:10px;`;
const Image = Styled.img`
object-fit:cover;
border-radius:50%;
height:50px;
width:50px;`;

const LeaderContainer = Styled.div`
margin-top:10px;`;
const LeaderText = Styled.a``;

const DescriptionContainer = Styled.div`
color:grey;
font-weight:500;
flex:2;`;

const Projects = ({ item }) => {
  nightMode = useSelector((state) => state.nightmodebar.toggle);
  const navigate = useNavigate();

  return (
    <ProjectContainer
      onClick={() => {
        navigate(`/projects/${item._id}`);
      }}
    >
      <DetailContainer>
        <TitleContainer>
          <TitleText>{item.title}</TitleText>
        </TitleContainer>
        <PeopleContainer>
          {item.members?.map((item) => (
            <ImgContainer>
              <Image
                src={
                  validURL(item.image)
                    ? item.image
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
              />
            </ImgContainer>
          ))}
        </PeopleContainer>
        <LeaderContainer>
          <LeaderText href={item.link}>{item.link}</LeaderText>
        </LeaderContainer>
      </DetailContainer>
      <DescriptionContainer>{item.description}</DescriptionContainer>
    </ProjectContainer>
  );
};

export default Projects;
