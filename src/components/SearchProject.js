import React from "react";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProjectContainer = Styled.div`
cursor:pointer;
margin:10px 20px;
display:flex;
align-items:flex-start;
justify-content:center;
box-shadow:0px 0px 5px grey;
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
const LeaderText = Styled.span``;

const DescriptionContainer = Styled.div`
color:grey;
font-weight:500;
flex:2;`;

const Projects = () => {
  const navigate = useNavigate();
  return (
    <ProjectContainer
      onClick={() => {
        navigate("/projects/23984789347");
      }}
    >
      <DetailContainer>
        <TitleContainer>
          <TitleText>Image Inpainting</TitleText>
        </TitleContainer>
        <PeopleContainer>
          <ImgContainer>
            <Image
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
            />
          </ImgContainer>
          <ImgContainer>
            <Image
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
            />
          </ImgContainer>
          <ImgContainer>
            <Image
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
            />
          </ImgContainer>
          <ImgContainer>
            <Image
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
            />
          </ImgContainer>
        </PeopleContainer>
        <LeaderContainer>
          <LeaderText>Posted 13 days ago</LeaderText>
        </LeaderContainer>
      </DetailContainer>
      <DescriptionContainer>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam facere
        voluptatibus impedit dignissimos eos, quisquam delectus quidem fugit
        pariatur vitae, odit vero nobis nulla, nesciunt architecto sapiente ut
        perferendis ullam voluptatum libero. Explicabo repellendus fugit, nam
        vero provident consequuntur nostrum?
      </DescriptionContainer>
    </ProjectContainer>
  );
};

export default Projects;
