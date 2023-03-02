import React, { useState } from "react";
import Styled from "styled-components";
import UploadIcon from "@mui/icons-material/Upload";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Toast from "../components/Toast";
let nightMode = true;
const Container = Styled.div`
background-color:${(props) => (nightMode ? "#292929" : "white")};
color:${(props) => (nightMode ? "white" : "black")};
`;

const Wrapper = Styled.div`
padding:10px;`;

const HeadContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const NameImgContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const ImgContainer = Styled.div`
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;`;

const NameContainer = Styled.div``;

const Img = Styled.img`
margin-bottom:10px;
width:100px;
height:100px;
border-radius:50%;`;

const Name = Styled.span`
font-weight:500;
font-size:28px;
`;
const Input = Styled.input`
font-size:18px;
  background-color:${(props) => (nightMode ? "#292929" : "white")};
  color:${(props) => (nightMode ? "white" : "grey")};
  width:90%;
  height:90%;
  border:none;
  &:focus{
    width:90%;
    height:90%;
    border:none;
    background-color:${(props) => (nightMode ? "#292929" : "white")};
    color:${(props) => (nightMode ? "white" : "black")};
    outline:none;
  }
  &:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus, 
&:-webkit-autofill:active{
   
    -webkit-box-shadow: ${(props) =>
      nightMode
        ? "0 0 0 30px #292929 inset !important"
        : "0 0 0 30px white inset !important"};
    -webkit-text-fill-color: ${(props) => (nightMode ? "white" : "black")};
}
  `;

const Label = Styled.label`
color:${(props) => (nightMode ? "white" : "grey")};
font-weight:500;
display:flex;
align-items:center;
margin-bottom:10px;
justify-content:center;`;

const DetailContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
`;
const DetailHeadingContainer = Styled.div`
margin-top:20px;
margin-bottom:20px;
display:flex;
align-items:center;
justify-content:center;`;
const DetailHeading = Styled.span`
font-size:30px;
font-weight:500;
color:#5A5A5A;`;
const DetailInput = Styled.div`
width:40%;
margin:10px 20px;`;
const DetailText = Styled.span`
font-weight:500;

color:${(props) => (nightMode ? "white" : "grey")};
font-size:18px;
`;
const TitleContainer = Styled.div``;

const InputDetail = Styled.input`
padding:7px 12px;
background-color:${(props) => (nightMode ? "#292929" : "white")};
color:${(props) => (nightMode ? "white" : "grey")};
&:focus{
  outline:none;
  background-color:${(props) => (nightMode ? "#292929" : "white")};
  color:${(props) => (nightMode ? "white" : "black")};
  border-bottom:1px solid blue;
   
};

font-size:15px;
border:none;
border-bottom:1px solid grey;
flex:4;
&:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus, 
&:-webkit-autofill:active{
  
  -webkit-box-shadow: ${(props) =>
    nightMode
      ? "0 0 0 30px #292929 inset !important"
      : "0 0 0 30px white inset !important"};
    -webkit-text-fill-color: ${(props) => (nightMode ? "white" : "black")};
  }

 
  `;
const InputContainer = Styled.div`
  margin-top:10px;
  padding:2px 3px;
  border:none;
 
  display:flex;
  align-items:center;
  justify-content:center;
  
  
  `;
const Select = Styled.select`
  padding:7px 12px;
&:focus{
  outline:none;
};
border:none;
flex:1;`;
const TextArea = Styled.textarea`
border:None;
background-color:${(props) => (nightMode ? "#292929" : "white")};
  color:${(props) => (nightMode ? "white" : "grey")};

&:focus{
  outline:none;
  background-color:${(props) => (nightMode ? "#292929" : "white")};
    color:${(props) => (nightMode ? "white" : "black")};
};
width:100%;
  &:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus, 
&:-webkit-autofill:active{
   
    -webkit-box-shadow: ${(props) =>
      nightMode
        ? "0 0 0 30px #292929 inset !important"
        : "0 0 0 30px white inset !important"};
    -webkit-text-fill-color: ${(props) => (nightMode ? "white" : "black")};
}
`;

const Option = Styled.option`
padding:7px 12px;`;

const EducationDetails = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;`;
const EducationDetailsHead = Styled.div`
display:flex;
align-items:center;
justify-content:center;
width:85%;`;
const EducationDetailsHeading = Styled.span`
font-size:24px;`;

const Qualification = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
`;
const Institution = Styled.div`
flex:3;
display:flex;
align-items:center;
justify-content:center;`;
const Score = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;`;
const Year = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;`;
const Edit = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;`;
const Delete = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;`;
const EducationDetailsContent = Styled.div`
display:flex;
align-items:center;
justify-content:center;
width:85%;
margin-top:10px;
`;
const EducationDetailsData = Styled.span`
font-size:18px;`;
const EducationDetailsInput = Styled.div`
margin-top:20px;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
`;
const AddContainer = Styled.div`

width:85%;
display:flex;
align-items:center;
justify-content:flex-end;
`;
const IconContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const SocialContainer = Styled.div`
`;
const ProjectsContainer = Styled.div`

`;
const ProjectHeadContainer = Styled.div`
width:80%;
display:flex;
justify-content:space-between;
align-items:center;
`;
const ProjectTitleContainer = Styled.div`
align-items:center;
display:flex;
justify-content:center;`;
const ProjectIconContainer = Styled.div`
align-items:center;
display:flex;
justify-content:center;`;
const ProjectDateContainer = Styled.div`
width:80%;
margin-top:20px;`;
const DateSpan = Styled.div``;
const ProjectLinkContainer = Styled.div`
width:80%;
margin-top:20px;`;
const Linked = Styled.a``;
const ProjectDescriptionContainer = Styled.div`
width:80%;
`;
const Paragraph = Styled.p`
align:left;`;
const ProjectsInputContainer = Styled.div``;

const SkillsContainer = Styled.div`
width:100%;`;
const SkillText = Styled.span`
font-size:18px;
color:black;
`;
const SkillDescription = Styled.div`

margin:10px 20px;
display:flex;
`;
const SkillName = Styled.div`
flex:3;

`;
const SkillRating = Styled.div`
display:flex;
flex:1;
align-items:center;
justify-content:center;`;

const AddSectionButton = Styled.button`
margin-top:20px;
padding:7px 12px;
border:none;
background-color:#3C84AB;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.4s ease;

cursor:pointer;
&:hover{
  transform:scale(1.1);
  background-color:#3C84FF;
}
`;
const AddButton = Styled.button`

padding:3px 7px;
border:none;
background-color:#3C84AB;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.4s ease;
cursor:pointer;
&:hover{
  background-color:#87CEEB;
}
`;

const CreateButton = Styled.button`
margin-top:20px;
margin-right:20px;
padding:3px 7px;
border:none;
background-color:red;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.4s ease;
cursor:pointer;
&:hover{
  background-color:orange;
}`;
const UpdateButton = Styled.button`
margin-top:20px;
padding:3px 7px;
border:none;
background-color:blue;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.4s ease;
cursor:pointer;
&:hover{
  background-color:lightblue;
}`;
const Profile = () => {
  nightMode = useSelector((state) => state.nightmodebar.toggle);
  const [personalDetails, setPersonalDetails] = useState({});
  const [educationDetails, setEducationDetails] = useState({
    title: "",
    college: "",
    score: "",
    year: "",
  });
  const [educationArray, setEducationArray] = useState([]);
  const [skills, setSkills] = useState({});
  const [projects, setProjects] = useState({});
  const [social, setSocial] = useState({});
  const [notification, setNotification] = useState(false);
  const [message, setMessage] = useState("");
  const handleNotification = (message) => {
    setNotification(true);
    setMessage(message);
    setTimeout(() => {
      setNotification(false);
    }, 3000);
  };
  const handlePersonalDetails = (e) => {
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });
  };
  const handleEducationDetails = (e) => {
    setEducationDetails({
      ...educationDetails,
      [e.target.name]: e.target.value,
    });
  };
  const addEducationDetails = () => {
    if (
      !educationDetails.title ||
      !educationDetails.college ||
      !educationDetails.score ||
      !educationDetails.year
    ) {
      console.log("error");
      handleNotification("Plese fill all the details");
      return;
    }
    setEducationArray([...educationArray, educationDetails]);
    setEducationDetails({});
    setEducationDetails({
      title: "",
      college: "",
      score: "",
      year: "",
    });
  };

  return (
    <Container>
      {notification && <Toast message={message} />}

      <Wrapper>
        <HeadContainer>
          <NameImgContainer>
            <ImgContainer>
              <Img
                src={
                  "https://wallpapers.com/images/high/deadpool-logo-cool-profile-picture-g2sv7i8j6nzd7tfa.webp"
                }
              />
              <Input id="image" type="file" hidden />
              <Label htmlFor="image">
                Upload Image <UploadIcon />
              </Label>
            </ImgContainer>
          </NameImgContainer>
        </HeadContainer>

        <DetailHeadingContainer>
          <DetailHeading>Personal Details</DetailHeading>
        </DetailHeadingContainer>
        <DetailContainer>
          <DetailInput>
            <TitleContainer>
              <DetailText>Name</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                type="text"
                name="name"
                onChange={(e) => handlePersonalDetails(e)}
                placeholder={"name"}
              />
            </InputContainer>
          </DetailInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>Job Title</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                type="text"
                name="jobtitle"
                placeholder={"SDE 2 Amazon"}
                onChange={(e) => handlePersonalDetails(e)}
              />
            </InputContainer>
          </DetailInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>Status</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                type="text"
                name="status"
                placeholder={"occupied"}
                onChange={(e) => handlePersonalDetails(e)}
              />
            </InputContainer>
          </DetailInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>About Myself</DetailText>
            </TitleContainer>
            <InputContainer>
              <TextArea
                name="description"
                placeholder="Introduction and career Objective"
                onChange={(e) => handlePersonalDetails(e)}
              ></TextArea>
            </InputContainer>
          </DetailInput>
          {/* <DetailInput>
            <TitleContainer>
              <DetailText>DOB:</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                name="dob"
                type="date"
                onChange={(e) => handlePersonalDetails(e)}
              />
              <Select>
                <Option>Public</Option>
                <Option>Private</Option>
              </Select>
            </InputContainer>
          </DetailInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>E-mail</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                name="email"
                type="email"
                placeholder={"abc@def.com"}
                onChange={(e) => handlePersonalDetails(e)}
              />
              <Select>
                <Option>Public</Option>
                <Option>Private</Option>
              </Select>
            </InputContainer>
          </DetailInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>Contact</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                name="contact"
                type="contact"
                placeholder={"+91 1234567"}
                onChange={(e) => handlePersonalDetails(e)}
              />
              <Select>
                <Option>Public</Option>
                <Option>Private</Option>
              </Select>
            </InputContainer>
          </DetailInput> */}
        </DetailContainer>
        <DetailHeadingContainer>
          <DetailHeading>Education Details</DetailHeading>
        </DetailHeadingContainer>
        <EducationDetails>
          <EducationDetailsHead>
            <Qualification>
              <EducationDetailsHeading>Title</EducationDetailsHeading>
            </Qualification>
            <Institution>
              <EducationDetailsHeading>Institution</EducationDetailsHeading>
            </Institution>
            <Score>
              <EducationDetailsHeading>Score</EducationDetailsHeading>
            </Score>
            <Year>
              <EducationDetailsHeading>Year</EducationDetailsHeading>
            </Year>

            <Delete>
              <EducationDetailsHeading>Delete</EducationDetailsHeading>
            </Delete>
          </EducationDetailsHead>
          {educationArray?.map((item) => (
            <EducationDetailsContent>
              <Qualification>
                <EducationDetailsData>{item.title}</EducationDetailsData>
              </Qualification>
              <Institution>
                <EducationDetailsData>{item.college}</EducationDetailsData>
              </Institution>
              <Score>
                <EducationDetailsData>{item.score}</EducationDetailsData>
              </Score>
              <Year>
                <EducationDetailsData>{item.score}</EducationDetailsData>
              </Year>

              <Delete>
                <EducationDetailsData>
                  <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
                </EducationDetailsData>
              </Delete>
            </EducationDetailsContent>
          ))}
        </EducationDetails>
        <EducationDetailsInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>Title:</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                name="title"
                onChange={(e) => {
                  handleEducationDetails(e);
                }}
                value={educationDetails.title}
                type="text"
                placeholder={"B. Tech"}
              />
            </InputContainer>
          </DetailInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>Institution</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                name="college"
                onChange={(e) => {
                  handleEducationDetails(e);
                }}
                value={educationDetails.college}
                type="text"
                placeholder={"Abc College"}
              />
            </InputContainer>
          </DetailInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>Score</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                type="text"
                name="score"
                onChange={(e) => {
                  handleEducationDetails(e);
                }}
                value={educationDetails.score}
                placeholder={"A+"}
              />
            </InputContainer>
          </DetailInput>
          <DetailInput>
            <TitleContainer>
              <DetailText>Year</DetailText>
            </TitleContainer>
            <InputContainer>
              <InputDetail
                name="year"
                onChange={(e) => {
                  handleEducationDetails(e);
                }}
                value={educationDetails.year}
                type="text"
                placeholder={"2020"}
              />
            </InputContainer>
          </DetailInput>
          <AddContainer>
            <IconContainer>
              <AddSectionButton onClick={() => addEducationDetails()}>
                Add
              </AddSectionButton>
            </IconContainer>
          </AddContainer>
        </EducationDetailsInput>
        <DetailHeadingContainer>
          <DetailHeading>Social Media Links</DetailHeading>
        </DetailHeadingContainer>
        <SocialContainer>
          <DetailContainer>
            <DetailInput>
              <InputContainer>
                <IconContainer>
                  <LinkedInIcon />
                </IconContainer>
                <InputDetail
                  type="link"
                  placeholder={"adixit7386@instagram.com"}
                />
                <IconContainer>
                  <EditIcon
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </IconContainer>
                <IconContainer>
                  <DeleteIcon
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </IconContainer>
              </InputContainer>
            </DetailInput>
            <DetailInput>
              <InputContainer>
                <IconContainer>
                  <LinkedInIcon />
                </IconContainer>
                <InputDetail
                  type="link"
                  placeholder={"adixit7386@instagram.com"}
                />
                <IconContainer>
                  <EditIcon
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </IconContainer>
                <IconContainer>
                  <DeleteIcon
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </IconContainer>
              </InputContainer>
            </DetailInput>
            <DetailInput>
              <InputContainer>
                <IconContainer>
                  <LinkedInIcon />
                </IconContainer>
                <InputDetail
                  type="link"
                  placeholder={"adixit7386@instagram.com"}
                />
                <IconContainer>
                  <EditIcon
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </IconContainer>
                <IconContainer>
                  <DeleteIcon
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </IconContainer>
              </InputContainer>
            </DetailInput>
            <DetailInput>
              <InputContainer>
                <IconContainer>
                  <LinkedInIcon />
                </IconContainer>
                <InputDetail
                  type="link"
                  placeholder={"adixit7386@instagram.com"}
                />
                <IconContainer>
                  <EditIcon
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </IconContainer>
                <IconContainer>
                  <DeleteIcon
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  />
                </IconContainer>
              </InputContainer>
            </DetailInput>
            <DetailInput>
              <InputContainer>
                <Select>
                  <Option>LinkedIn</Option>
                  <Option>Instagram</Option>
                  <Option>Github</Option>
                  <Option>LeetCode</Option>
                  <Option>Medium</Option>
                  <Option>Dev.to</Option>
                </Select>
                <InputDetail type="link" placeholder={"sdlfkjdsf@cga.co"} />
                <IconContainer>
                  {/* <AddIcon
                    style={{
                      color: "green",
                      height: "30px",
                      width: "30px",
                      cursor: "pointer",
                    }}
                  /> */}
                </IconContainer>
                <AddButton>Add</AddButton>
              </InputContainer>
            </DetailInput>
          </DetailContainer>
        </SocialContainer>
        <DetailHeadingContainer>
          <DetailHeading>Projects</DetailHeading>
        </DetailHeadingContainer>
        <ProjectsContainer>
          <DetailContainer>
            <ProjectHeadContainer>
              <ProjectTitleContainer>
                <Label>Image Inpainting</Label>
              </ProjectTitleContainer>
              <ProjectIconContainer>
                <DeleteIcon
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                />
                <EditIcon
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                />
              </ProjectIconContainer>
            </ProjectHeadContainer>
            <ProjectDateContainer>
              <DateSpan>may 2020 - july 2021</DateSpan>
            </ProjectDateContainer>
            <ProjectLinkContainer>
              <Linked href="http://www.sarkariresults.com">
                http://www.sarkariresults.com
              </Linked>
            </ProjectLinkContainer>
            <ProjectDescriptionContainer>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eligendi quis vel! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ut unde modi et soluta possimus illo optio
                ipsa tempore! Obcaecati quis earum id nemo sequi, dignissimos
                odio explicabo soluta accusamus corrupti commodi accusantium
                facere eveniet quidem adipisci natus fugiat maiores, illo
                possimus aperiam hic magni laboriosam. Inventore dolores sunt
                harum nostrum.
              </Paragraph>
            </ProjectDescriptionContainer>
          </DetailContainer>
          <DetailContainer>
            <ProjectHeadContainer>
              <ProjectTitleContainer>
                <Label>Image Inpainting</Label>
              </ProjectTitleContainer>
              <ProjectIconContainer>
                <DeleteIcon
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                />
                <EditIcon
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                />
              </ProjectIconContainer>
            </ProjectHeadContainer>
            <ProjectLinkContainer>
              <Linked href="http://www.sarkariresults.com">
                http://www.sarkariresults.com
              </Linked>
            </ProjectLinkContainer>
            <ProjectDescriptionContainer>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eligendi quis vel! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ut unde modi et soluta possimus illo optio
                ipsa tempore! Obcaecati quis earum id nemo sequi, dignissimos
                odio explicabo soluta accusamus corrupti commodi accusantium
                facere eveniet quidem adipisci natus fugiat maiores, illo
                possimus aperiam hic magni laboriosam. Inventore dolores sunt
                harum nostrum.
              </Paragraph>
            </ProjectDescriptionContainer>
          </DetailContainer>
          <DetailContainer>
            <ProjectHeadContainer>
              <ProjectTitleContainer>
                <Label>Image Inpainting</Label>
              </ProjectTitleContainer>
              <ProjectIconContainer>
                <DeleteIcon
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                />
                <EditIcon
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                />
              </ProjectIconContainer>
            </ProjectHeadContainer>
            <ProjectLinkContainer>
              <Linked href="http://www.sarkariresults.com">
                http://www.sarkariresults.com
              </Linked>
            </ProjectLinkContainer>
            <ProjectDescriptionContainer>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eligendi quis vel! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ut unde modi et soluta possimus illo optio
                ipsa tempore! Obcaecati quis earum id nemo sequi, dignissimos
                odio explicabo soluta accusamus corrupti commodi accusantium
                facere eveniet quidem adipisci natus fugiat maiores, illo
                possimus aperiam hic magni laboriosam. Inventore dolores sunt
                harum nostrum.
              </Paragraph>
            </ProjectDescriptionContainer>
          </DetailContainer>
          <DetailContainer>
            <ProjectHeadContainer>
              <ProjectTitleContainer>
                <Label>Image Inpainting</Label>
              </ProjectTitleContainer>
              <ProjectIconContainer>
                <DeleteIcon
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                />
                <EditIcon
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    marginRight: "20px",
                  }}
                />
              </ProjectIconContainer>
            </ProjectHeadContainer>
            <ProjectLinkContainer>
              <Linked href="http://www.sarkariresults.com">
                http://www.sarkariresults.com
              </Linked>
            </ProjectLinkContainer>
            <ProjectDescriptionContainer>
              <Paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                eligendi quis vel! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ut unde modi et soluta possimus illo optio
                ipsa tempore! Obcaecati quis earum id nemo sequi, dignissimos
                odio explicabo soluta accusamus corrupti commodi accusantium
                facere eveniet quidem adipisci natus fugiat maiores, illo
                possimus aperiam hic magni laboriosam. Inventore dolores sunt
                harum nostrum.
              </Paragraph>
            </ProjectDescriptionContainer>
          </DetailContainer>
        </ProjectsContainer>
        <ProjectsInputContainer>
          <DetailContainer>
            <DetailInput>
              <TitleContainer>
                <DetailText>Title</DetailText>
              </TitleContainer>
              <InputContainer>
                <InputDetail type="text" placeholder={"Image Impainting"} />
              </InputContainer>
            </DetailInput>
            <DetailInput>
              <TitleContainer>
                <DetailText>Duration</DetailText>
              </TitleContainer>
              <InputContainer>
                <span>From</span>
                <InputDetail type="date" />
                <span>To</span>
                <InputDetail type="date" />
              </InputContainer>
            </DetailInput>
            <DetailInput>
              <TitleContainer>
                <DetailText>Link</DetailText>
              </TitleContainer>
              <InputContainer>
                <InputDetail
                  type="text"
                  placeholder={"http://localhost:3000"}
                />
                <Select>
                  <Option>Public</Option>
                  <Option>Private</Option>
                </Select>
              </InputContainer>
            </DetailInput>
            <DetailInput>
              <TitleContainer>
                <DetailText>Description</DetailText>
              </TitleContainer>
              <InputContainer>
                <TextArea placeholder="about project"></TextArea>
              </InputContainer>
            </DetailInput>
          </DetailContainer>
        </ProjectsInputContainer>
        <AddContainer>
          <IconContainer>
            <AddSectionButton>Add</AddSectionButton>
            {/* <AddIcon
              style={{
                color: "green",
                height: "70px",
                width: "70px",
                cursor: "pointer",
              }}
            /> */}
          </IconContainer>
        </AddContainer>
        <DetailHeadingContainer>
          <DetailHeading>Skills</DetailHeading>
        </DetailHeadingContainer>
        <SkillsContainer>
          <DetailContainer>
            <DetailInput>
              <SkillDescription>
                <SkillName>
                  <SkillText>Problem Solving</SkillText>
                </SkillName>
                <SkillRating>
                  <SkillText>4.5</SkillText>
                </SkillRating>
              </SkillDescription>
            </DetailInput>
            <DetailInput>
              <SkillDescription>
                <SkillName>
                  <SkillText>Problem Solving</SkillText>
                </SkillName>
                <SkillRating>
                  <SkillText>4.5</SkillText>
                </SkillRating>
              </SkillDescription>
            </DetailInput>
            <DetailInput>
              <SkillDescription>
                <SkillName>
                  <SkillText>Problem Solving</SkillText>
                </SkillName>
                <SkillRating>
                  <SkillText>4.5</SkillText>
                </SkillRating>
              </SkillDescription>
            </DetailInput>
            <DetailInput>
              <InputContainer>
                <InputDetail type="text" placeholder={"javascript"} />

                <Select>
                  <Option>Beginner</Option>

                  <Option>Intermediate</Option>
                  <Option>Advanced</Option>
                  <Option>Professional</Option>
                </Select>
                <IconContainer>
                  {/* <AddIcon
                    style={{
                      color: "green",
                      height: "30px",
                      width: "30px",
                      cursor: "pointer",
                    }}
                  /> */}
                  <AddButton>Add</AddButton>
                </IconContainer>
              </InputContainer>
            </DetailInput>
          </DetailContainer>
        </SkillsContainer>
        <AddContainer>
          <IconContainer>
            <CreateButton>Create</CreateButton>
            <UpdateButton>Update</UpdateButton>
          </IconContainer>
        </AddContainer>
      </Wrapper>
    </Container>
  );
};

export default Profile;
