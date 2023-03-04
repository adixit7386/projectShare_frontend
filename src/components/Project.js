import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { validURL } from "../config/chatLogics";
import axios from "axios";
const Container = Styled.div`
`;
const Wrapper = Styled.div`
margin:10px 20px;`;
const HeadContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const Heading = Styled.h1`
margin:0px;
`;
const MiddleContainer = Styled.div`
display:flex;
margin-top:20px;
align-items:center;
justify-content:center;`;
const PeopleContainer = Styled.div`
flex:1;
display:flex;

`;
const ImgContainer = Styled.div`


height:50px;
width:50px;
margin-right:10px;`;
const Image = Styled.img`
cursor:pointer;
object-fit:cover;
border-radius:50%;
height:50px;
width:50px;`;
const LinkContainer = Styled.div`
flex:1
`;
const Link = Styled.a``;
const BottomContainer = Styled.div``;
const Paragraph = Styled.p``;
const ButtonContainer = Styled.div`
display:flex;
align-items:center;
justify-content:flex-end;`;
const ButtonDelete = Styled.button`
margin:10px 30px;
padding:5px 12px;
font-size:24px;
border:none;
background-color:skyblue;
color:white;
border-radius:10px;
transition:all 0.3s ease;
cursor:pointer;
&:hover{
    transform:scale(1.1);
}`;
const Project = () => {
  const navigate = useNavigate();
  let location = useLocation();
  location = location.pathname.split("/");
  let projectId = location[2];
  console.log(location);
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/api/project/${projectId}`
        );

        setProject(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchProject();
  }, [projectId]);

  return (
    <Container>
      <Wrapper>
        {loading && <Loader />}
        <HeadContainer>
          <Heading>{project.title}</Heading>
        </HeadContainer>
        <MiddleContainer>
          <PeopleContainer>
            {project.members?.map((item) => (
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
          <LinkContainer>
            <Link href={project.link}>{project.link}</Link>
          </LinkContainer>
        </MiddleContainer>
        <BottomContainer>
          <Paragraph>{project.description}</Paragraph>
        </BottomContainer>
        <ButtonContainer>
          <ButtonDelete>Delete Project</ButtonDelete>
          <ButtonDelete
            onClick={() => navigate(`/projects/update/${project._id}`)}
          >
            Update Project
          </ButtonDelete>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Project;
