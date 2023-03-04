import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import UploadIcon from "@mui/icons-material/Upload";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { validURL } from "../config/chatLogics";
import { toggleWarningBar } from "../redux/warningReducer";
import { loginSuccess } from "../redux/userReducer";
import axios from "axios";
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
object-fit:cover;
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
width:100%;
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
background-color:${(props) => (nightMode ? "#292929" : "#f6f8fa")};
color:${(props) => (nightMode ? "white" : "grey")};
&:focus{
  outline:none;
  background-color:${(props) => (nightMode ? "#292929" : "#f6f8fa")};
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
      : "0 0 0 30px #f6f8fa inset !important"};
    -webkit-text-fill-color: ${(props) => (nightMode ? "white" : "black")};
  }

 
  `;
const InputContainer = Styled.div`
  margin-top:10px;
  padding:2px 3px;
  border:none;
 background-color:#f6f8fa;
  display:flex;
  align-items:center;
  justify-content:center;
  
  
  `;
const Select = Styled.select`
  padding:7px 12px;
  background-color:#f6f8fa;
&:focus{
  outline:none;
};
border:none;
flex:1;`;
const TextArea = Styled.textarea`
border:None;
background-color:${(props) => (nightMode ? "#292929" : "#f6f8fa")};
  color:${(props) => (nightMode ? "white" : "grey")};

&:focus{
  outline:none;
  background-color:${(props) => (nightMode ? "#292929" : "#f6f8fa")};
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
margin-top:20px;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
width:85%;
`;
const SubmitContainer = Styled.div`
margin-top:20px;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
width:100%;
`;
const IconContainer = Styled.div`
flex:1;
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
const ProjectsInputContainer = Styled.div`
margin-top:20px;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;`;

const SkillsContainer = Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;`;
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
padding:3px 5px;
border:none;
background-color:#3C84AB;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.2s ease;

cursor:pointer;
&:hover{
  transform:scale(1.05);
  background-color:#3C84FF;
}
`;
const AddButton = Styled.button`

margin-top:20px;
padding:3px 5px;
border:none;
background-color:#3C84AB;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.2s ease;

cursor:pointer;
&:hover{
  transform:scale(1.05);
  background-color:#3C84FF;
}
`;
const AddButtonSingle = Styled.button`


padding:3px 5px;
border:none;
background-color:#3C84AB;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.2s ease;

cursor:pointer;
&:hover{
  transform:scale(1.05);
  background-color:#3C84FF;
}
`;
const LinkContainer = Styled.div`
  flex:5;

`;
const LinkText = Styled.a`

font-size:20px;`;

const CreateButton = Styled.button`
margin-top:20px;
margin-bottom:20px;
margin-right:20px;
padding:5px 12px;
border:none;
background-color:#00428A;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.2s ease;

cursor:pointer;
&:hover{
  transform:scale(1.06);
}`;
const UpdateButton = Styled.button`
margin-top:20px;
margin-bottom:20px;
padding:5px 12px;
border:none;
background-color:#00428A;
color:white;
border-radius:5px;
font-size:24px;
transition:all 0.4s ease;
cursor:pointer;
&:hover{
   transform:scale(1.06);;
}`;
const Section = Styled.div`
border-radius:10px;
padding:7px 12px;
margin-bottom:10px;
background-color:#f6f8fa;
`;
const Profile = () => {
  nightMode = useSelector((state) => state.nightmodebar.toggle);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [existingProfile, setExistingProfile] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({});
  const [educationDetails, setEducationDetails] = useState({
    title: "",
    college: "",
    score: "",
    year: "",
  });
  const [educationArray, setEducationArray] = useState([]);
  const [social, setSocial] = useState({ website: "", link: "" });
  const [socialArray, setSocialArray] = useState([]);
  const [projects, setProjects] = useState({
    title: "",
    link: "",
    from: "",
    to: "",
    description: "",
  });
  const [projectsArray, setProjectsArray] = useState([]);
  const [skills, setSkills] = useState({ skill: "", rating: "" });
  const [skillsArray, setSkillsArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgLink, setImgLink] = useState(user.image);
  const handleNotification = (message) => {
    dispatch(toggleWarningBar(message));
    setTimeout(() => {
      dispatch(toggleWarningBar(""));
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
  const deleteEducationDetail = (item) => {
    setEducationArray(educationArray.filter((i) => i !== item));
  };
  const addEducationDetails = () => {
    if (
      !educationDetails.title ||
      !educationDetails.institution ||
      !educationDetails.score ||
      !educationDetails.year
    ) {
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
  const handleSocialLinks = (e) => {
    setSocial({ ...social, [e.target.name]: e.target.value });
  };
  const addSocialArray = () => {
    if (!social.website || !social.link) {
      handleNotification("Plese fill all the details");
      return;
    }
    setSocialArray([...socialArray, social]);
    setSocial({ website: "", link: "" });
  };
  const deleteSocialLinks = (item) => {
    setSocialArray(socialArray.filter((i) => i !== item));
  };
  const handleProjects = (e) => {
    setProjects({ ...projects, [e.target.name]: e.target.value });
  };
  const addProjectsArray = () => {
    if (
      !projects.title ||
      !projects.link ||
      !projects.from ||
      !projects.to ||
      !projects.description
    ) {
      handleNotification("Plese fill all the details");
      return;
    }
    setProjectsArray([...projectsArray, projects]);
    setProjects({
      title: "",
      link: "",
      from: "",
      to: "",
      description: "",
    });
  };
  const deleteProjectsArray = (item) => {
    setProjectsArray(projectsArray.filter((i) => i !== item));
  };
  const handleSkills = (e) => {
    setSkills({ ...skills, [e.target.name]: e.target.value });
  };
  const addSkillsArray = () => {
    if (!skills.skill || !skills.rating) {
      handleNotification("Plese fill all the details");
      return;
    }
    setSkillsArray([...skillsArray, skills]);
    setSkills({ skill: "", rating: "" });
  };
  let userProfile = {};
  const deleteSkillsArray = (item) => {
    setSkillsArray(skillsArray.filter((i) => i !== item));
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const savedUserProfile = await axios.get(
          `http://localhost:5000/api/profile/${user._id}`
        );
        let existingUserProfile = savedUserProfile.data;
        console.log(existingProfile);
        if (existingUserProfile) {
          setExistingProfile(true);
          setPersonalDetails({
            name: existingUserProfile.name,
            jobtitle: existingUserProfile.jobtitle,
            status: existingUserProfile.status,
            description: existingUserProfile.description,
          });
          setEducationArray(existingUserProfile.education);
          setSocialArray(existingUserProfile.links);
          setSkillsArray(existingUserProfile.skills);
          setProjectsArray(existingUserProfile.projects);
        } else {
        }
      } catch (error) {
        handleNotification("Invalid UserId");
      }
    };
    getUserData();
  }, [user._id]);
  const handleCreateProfile = async () => {
    userProfile = {
      userId: user._id,
      ...userProfile,
      ...personalDetails,
      education: educationArray,
      links: socialArray,
      projects: projectsArray,
      skills: skillsArray,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    const validUserProfile = (userProfile) => {
      if (
        userProfile.userId === "" ||
        userProfile.name === "" ||
        userProfile.jobtitle === "" ||
        userProfile.status === "" ||
        userProfile.description === "" ||
        userProfile.education.length === 0 ||
        userProfile.links.length === 0 ||
        userProfile.projects.length === 0 ||
        userProfile.skills.length === 0
      ) {
        return false;
      }
      return true;
    };
    try {
      if (!validUserProfile(userProfile)) {
        handleNotification("please fill all the details");
        return;
      }
      const res = await axios.post(
        "http://localhost:5000/api/profile",
        userProfile,
        config
      );
      handleNotification("Profile created successfully");
    } catch (err) {
      console.log(err);
    }
  };
  const handleUpdateProfile = async () => {
    userProfile = {
      userId: user._id,
      ...userProfile,
      ...personalDetails,
      education: educationArray,
      links: socialArray,
      projects: projectsArray,
      skills: skillsArray,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    const validUserProfile = (userProfile) => {
      if (
        userProfile.userId === "" ||
        userProfile.name === "" ||
        userProfile.jobtitle === "" ||
        userProfile.status === "" ||
        userProfile.description === "" ||
        userProfile.education.length === 0 ||
        userProfile.links.length === 0 ||
        userProfile.projects.length === 0 ||
        userProfile.skills.length === 0
      ) {
        return false;
      }
      return true;
    };
    try {
      if (!validUserProfile(userProfile)) {
        handleNotification("please fill all the details");
        return;
      }
      const res = await axios.put(
        "http://localhost:5000/api/profile",
        userProfile,
        config
      );
      let existingUserProfile = res.data;
      setPersonalDetails({
        name: existingUserProfile.name,
        jobtitle: existingUserProfile.jobtitle,
        status: existingUserProfile.status,
        description: existingUserProfile.description,
      });
      setEducationArray(existingUserProfile.education);
      setSocialArray(existingUserProfile.links);
      setSkillsArray(existingUserProfile.skills);
      setProjectsArray(existingUserProfile.projects);
      handleNotification("profile updated successfully");
    } catch (err) {
      handleNotification("server error");
      console.log(err);
    }
  };
  const setFiles = (img) => {
    setLoading(true);
    if (img === undefined) {
      handleNotification("Please select the image");
      setLoading(false);
      return;
    }

    if (img.type === "image/jpeg" || img.type === "image/png") {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", "react-chat-app");
      data.append("cloud_name", "dcvv2vevf");
      fetch("https://api.cloudinary.com/v1_1/dcvv2vevf/image/upload", {
        method: "post",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          const getUserData = async () => {
            const config = {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            };
            let imagelink = data.url.toString();

            try {
              const res = await axios.put(
                `http://localhost:5000/api/user/register`,
                { image: imagelink },
                config
              );

              setImgLink(data.url.toString());
              handleNotification("image updated successfully");
              dispatch(loginSuccess(res.data));
            } catch (error) {
              handleNotification("image couldn't be updated");
              console.log(error);
            }
            setLoading(false);
          };
          getUserData();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };
  console.log(educationArray);
  return (
    <Container>
      <Wrapper>
        <Section>
          <HeadContainer>
            <NameImgContainer>
              <ImgContainer>
                <Img
                  src={
                    validURL(imgLink)
                      ? imgLink
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                />
                <Input
                  id="image"
                  type="file"
                  onChange={(e) => setFiles(e.target.files[0])}
                  hidden
                />
                <Label htmlFor="image">
                  {loading ? "uploading..." : "Upload Image"} <UploadIcon />
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
                  value={personalDetails.name}
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
                  value={personalDetails.jobtitle}
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
                  value={personalDetails.status}
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
                  value={personalDetails.description}
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
        </Section>
        <Section>
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
                  <EducationDetailsData>
                    {item.institution}
                  </EducationDetailsData>
                </Institution>
                <Score>
                  <EducationDetailsData>{item.score}</EducationDetailsData>
                </Score>
                <Year>
                  <EducationDetailsData>{item.year}</EducationDetailsData>
                </Year>

                <Delete>
                  <EducationDetailsData>
                    <DeleteIcon
                      onClick={() => deleteEducationDetail(item)}
                      style={{ color: "red", cursor: "pointer" }}
                    />
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
                  name="institution"
                  onChange={(e) => {
                    handleEducationDetails(e);
                  }}
                  value={educationDetails.institution}
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
        </Section>
        <Section>
          <DetailHeadingContainer>
            <DetailHeading>Projects</DetailHeading>
          </DetailHeadingContainer>
          <ProjectsContainer>
            {projectsArray?.map((item) => (
              <DetailContainer>
                <ProjectHeadContainer>
                  <ProjectTitleContainer>
                    <Label>{item.title}</Label>
                  </ProjectTitleContainer>
                  <ProjectIconContainer>
                    <DeleteIcon
                      onClick={() => deleteProjectsArray(item)}
                      style={{
                        color: "red",
                        cursor: "pointer",
                        marginRight: "20px",
                      }}
                    />
                  </ProjectIconContainer>
                </ProjectHeadContainer>
                <ProjectDateContainer>
                  <DateSpan>
                    {item.from} <strong>to</strong> {item.to}
                  </DateSpan>
                </ProjectDateContainer>
                <ProjectLinkContainer>
                  <Linked href={item.link}>{item.link}</Linked>
                </ProjectLinkContainer>
                <ProjectDescriptionContainer>
                  <Paragraph>{item.description}</Paragraph>
                </ProjectDescriptionContainer>
              </DetailContainer>
            ))}
          </ProjectsContainer>
          <ProjectsInputContainer>
            <DetailContainer>
              <DetailInput>
                <TitleContainer>
                  <DetailText>Title</DetailText>
                </TitleContainer>
                <InputContainer>
                  <InputDetail
                    type="text"
                    name="title"
                    value={projects.title}
                    onChange={(e) => handleProjects(e)}
                    placeholder={"Image Impainting"}
                  />
                </InputContainer>
              </DetailInput>
              <DetailInput>
                <TitleContainer>
                  <DetailText>Duration</DetailText>
                </TitleContainer>
                <InputContainer>
                  <span>From</span>
                  <InputDetail
                    name="from"
                    value={projects.from}
                    onChange={(e) => handleProjects(e)}
                    type="date"
                  />
                  <span>To</span>
                  <InputDetail
                    name="to"
                    value={projects.to}
                    onChange={(e) => handleProjects(e)}
                    type="date"
                  />
                </InputContainer>
              </DetailInput>
              <DetailInput>
                <TitleContainer>
                  <DetailText>Link</DetailText>
                </TitleContainer>
                <InputContainer>
                  <InputDetail
                    type="text"
                    name="link"
                    value={projects.link}
                    onChange={(e) => handleProjects(e)}
                    placeholder={"http://localhost:3000"}
                  />
                </InputContainer>
              </DetailInput>
              <DetailInput>
                <TitleContainer>
                  <DetailText>Description</DetailText>
                </TitleContainer>
                <InputContainer>
                  <TextArea
                    onChange={(e) => handleProjects(e)}
                    value={projects.description}
                    name="description"
                    placeholder="about project"
                  ></TextArea>
                </InputContainer>
              </DetailInput>
            </DetailContainer>

            <AddContainer>
              <IconContainer>
                <AddSectionButton onClick={() => addProjectsArray()}>
                  Add
                </AddSectionButton>
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
          </ProjectsInputContainer>
        </Section>
        <Section>
          <DetailHeadingContainer>
            <DetailHeading>Skills</DetailHeading>
          </DetailHeadingContainer>
          <SkillsContainer>
            <DetailContainer>
              {skillsArray?.map((item) => {
                return (
                  <DetailInput>
                    <SkillDescription>
                      <SkillName>
                        <SkillText style={{ fontWeight: "500" }}>
                          {item.skill}
                        </SkillText>
                      </SkillName>
                      <SkillRating>
                        <SkillText>{item.rating}</SkillText>
                      </SkillRating>
                      <IconContainer>
                        <DeleteIcon
                          onClick={() => deleteSkillsArray(item)}
                          style={{
                            color: "red",
                            cursor: "pointer",
                            marginRight: "10px",
                          }}
                        />
                      </IconContainer>
                    </SkillDescription>
                  </DetailInput>
                );
              })}

              <DetailInput>
                <InputContainer>
                  <InputDetail
                    type="text"
                    name="skill"
                    value={skills.skill}
                    onChange={(e) => {
                      handleSkills(e);
                    }}
                    placeholder={"javascript"}
                  />

                  <Select
                    name="rating"
                    value={skills.rating}
                    onChange={(e) => {
                      handleSkills(e);
                    }}
                  >
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
                    <AddButtonSingle onClick={() => addSkillsArray()}>
                      Add
                    </AddButtonSingle>
                  </IconContainer>
                </InputContainer>
              </DetailInput>
            </DetailContainer>
          </SkillsContainer>
        </Section>
        <Section>
          <DetailHeadingContainer>
            <DetailHeading>Social Media Links</DetailHeading>
          </DetailHeadingContainer>
          <SocialContainer>
            <DetailContainer>
              {socialArray?.map((item) => (
                <DetailInput>
                  <InputContainer>
                    <LinkContainer>
                      <LinkText href={item.link}>{item.website}</LinkText>
                    </LinkContainer>

                    <IconContainer>
                      <DeleteIcon
                        onClick={() => deleteSocialLinks(item)}
                        style={{
                          color: "red",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                      />
                    </IconContainer>
                  </InputContainer>
                </DetailInput>
              ))}

              <DetailInput>
                <InputContainer>
                  <Select
                    name="website"
                    onChange={(e) => {
                      handleSocialLinks(e);
                    }}
                  >
                    <Option>LinkedIn</Option>
                    <Option>Instagram</Option>
                    <Option>Github</Option>
                    <Option>LeetCode</Option>
                    <Option>Medium</Option>
                    <Option>Dev.to</Option>
                  </Select>
                  <InputDetail
                    type="link"
                    name="link"
                    value={social.link}
                    onChange={(e) => handleSocialLinks(e)}
                    placeholder={"sdlfkjdsf@cga.co"}
                  />
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
                  <AddButton
                    onClick={() => {
                      addSocialArray();
                    }}
                  >
                    Add
                  </AddButton>
                </InputContainer>
              </DetailInput>
            </DetailContainer>
          </SocialContainer>
        </Section>

        <Section>
          <SubmitContainer>
            <IconContainer>
              {existingProfile === false ? (
                <CreateButton
                  onClick={() => {
                    handleCreateProfile();
                  }}
                >
                  Create
                </CreateButton>
              ) : (
                <UpdateButton
                  onClick={() => {
                    handleUpdateProfile();
                  }}
                >
                  Update
                </UpdateButton>
              )}
            </IconContainer>
          </SubmitContainer>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Profile;
