import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { validURL } from "../config/chatLogics";
import { Mobile } from "../responsive";
let nightMode = true;
const ProjectContainer = Styled.div`
max-width:100vw;
background-color:${(props) => (nightMode ? "#1F1F1F" : "#f8f9fa")};
color:${(props) => (nightMode ? "white" : "black")};
padding:7px 12px;
cursor:pointer;
margin:10px 20px;
display:flex;
align-items:flex-start;
justify-content:center;
${Mobile({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
})}
border-radius:10px;

transition:all 0.3s ease;
&:hover{

  transform:scale(1.005);
}

`;
const DetailContainer = Styled.div`
max-width:100%;

flex:1;
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
${Mobile({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
})}
`;

const TitleContainer = Styled.div`
font-weight:600;

word-wrap:break-word;
max-width:100%;
flex:1;`;
const TitleText = Styled.h1`
word-wrap:break-word;

font-size:20px;`;

const PeopleContainer = Styled.div`

margin-top:10px;
display:flex;

`;
const ImgContainer = Styled.div`
${Mobile({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
})}

height:50px;
width:50px;
margin-right:10px;`;
const Image = Styled.img`
border:${(props) => props.admin && "solid 1px black"};
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
${Mobile({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
})}
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
          {item.members?.map((memberitem) => (
            <ImgContainer>
              {console.log(item.members, item.projectAdmin)}
              <Image
                admin={memberitem?._id === item.projectAdmin ? true : false}
                src={
                  validURL(memberitem.image)
                    ? memberitem.image
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
              />
            </ImgContainer>
          ))}
        </PeopleContainer>
        <LeaderContainer>
          <LeaderText href={item.link}>Link</LeaderText>
        </LeaderContainer>
      </DetailContainer>
      <DescriptionContainer>{item.description}</DescriptionContainer>
    </ProjectContainer>
  );
};

export default Projects;
