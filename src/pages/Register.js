import React, { useState } from "react";
import Styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Mobile } from "../responsive";
import axios from "axios";
import Toast from "../components/Toast";
import { validURL } from "../config/chatLogics";
import { useSelector, useDispatch } from "react-redux";
import { toggleWarningBar } from "../redux/warningReducer";
let nightMode = true;
const Container = Styled.div`

height:100vh;
background-color:${(props) => (nightMode ? "#1F1F1F" : "#f8f9fa")};
color:${(props) => (nightMode ? "white" : "black")};
display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper = Styled.div`

display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:700px;
padding:40px 40px;
background-color:${(props) => (nightMode ? "#292929" : "white")};
border-radius:10px;

`;
const Title = Styled.h1`
font-size:40px;
margin-top:10px;
margin-bottom:10px;
`;
const Span = Styled.span`
color:#0081B4;
font-size:40px;
`;

const LoginText = Styled.span`
  font-size: 25px;
  
  margin-bottom:20px;
  margin-top:10px;
`;

const InputWrapper = Styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;
${Mobile({ flexWrap: "" })}
`;
const InputContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:10px 5px;
height:30px;

border:solid gray 1px;
border-radius:5px;
margin:6px 12px;

width:300px;
${Mobile({ margin: "3px 12px" })};
background-color:${(props) => (nightMode ? "#292929" : "white")};
`;
const Input = Styled.input`

background-color:${(props) => (nightMode ? "#292929" : "white")};
  color:${(props) => (nightMode ? "white" : "grey")};
font-size:18px;
width:90%;
height:90%;
border:none;

outline:none;
transition:all 0.3s ease;
&:focus{
    
    
    border:none;
    outline:none;
    font-size:18px;
width:90%;
height:90%;
background-color:${(props) => (nightMode ? "#292929" : "white")};
    color:${(props) => (nightMode ? "white" : "black")};
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
const CheckboxContainer = Styled.div`
width:100%;
display:flex;

align-items:center;
justify-content:center;
margin-top:10px;

`;

const Button = Styled.button`
margin-top:20px;

padding:10px 5px;
height:50px;
border:none;
width:50%;
border-radius:10px;
background-color:#0d6efd;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
color:white;

&:hover{
    background-color:#0d6ee5;
};
cursor:Pointer;`;

const Warning = Styled.span`
margin-top:10px;`;
const Img = Styled.img`
height:40px;
width:40px;
border-radius:50%;
object-fit:cover;`;
const Label = Styled.label``;
const Login = () => {
  nightMode = useSelector((state) => state.nightmodebar.toggle);
  const dispatch = useDispatch();
  let user = {};
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const [imgLink, setImgLink] = useState("");

  const navigate = useNavigate();
  const [isnotification, setIsNotification] = useState(false);

  const ManageNotification = (message) => {
    setTimeout(() => {
      setIsNotification(true);
      dispatch(toggleWarningBar(message));
    }, 10);
    setIsNotification(false);
  };
  const handleClick = async () => {
    if (!password || !repassword || !userName || !password || !email || !name) {
      ManageNotification("Please Provide all the details");

      return;
    }
    if (password !== repassword) {
      ManageNotification("Passwords do not match");

      return;
    }

    user.username = userName;
    user.email = email;
    user.password = password;
    user.name = name;
    user.image = imgLink;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/register",
        user
      );

      if (res.status === 201) {
        navigate("/login");
      }
      console.log(res);
    } catch (err) {
      ManageNotification("This user already exists");
    }
  };

  const setFiles = (img) => {
    setLoading(true);
    if (img === undefined) {
      ManageNotification("Please select the image");
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
          setImgLink(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <Container>
      <Wrapper>
        {isnotification && <Toast />}

        <Title>
          project<Span>Share</Span>
        </Title>
        <LoginText>Please Register Here</LoginText>
        <InputWrapper>
          <InputContainer name="name">
            <Input
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer name="image">
            <Input
              hidden
              id="image"
              type="file"
              onChange={(e) => setFiles(e.target.files[0])}
            />
            <Label
              htmlFor="image"
              style={{
                width: "calc(90% - 40px)",
                color: "grey",
                cursor: "pointer",
              }}
            >
              {loading ? "uploading..." : "Upload your picture"}
            </Label>
            <Img
              src={
                validURL(imgLink)
                  ? imgLink
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
            />
          </InputContainer>
          <InputContainer name="username">
            <Input
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </InputContainer>
          <InputContainer name="email">
            <Input
              type="email"
              placeholder="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer name="password">
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </InputContainer>
          <InputContainer name="repeatpassword">
            <Input
              type="password"
              placeholder="Repeat Password"
              onChange={(e) => {
                setRepassword(e.target.value);
              }}
            />
          </InputContainer>
        </InputWrapper>
        <Button type="button" onClick={() => handleClick()}>
          Register
        </Button>

        <CheckboxContainer>
          <Warning>
            already have an account?{" "}
            <Link to="/login" style={{ all: "unset", cursor: "pointer" }}>
              Login
            </Link>{" "}
          </Warning>
        </CheckboxContainer>
        <Warning>
          I agree with the <b style={{ cursor: "pointer" }}>PRIVACY POLICY</b>
        </Warning>
      </Wrapper>
    </Container>
  );
};

export default Login;
