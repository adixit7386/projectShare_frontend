import React, { useState } from "react";
import Styled from "styled-components";
import Toast from "../components/Toast";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
width:300px;

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

const InputContainer = Styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10px 5px;
  height:30px;
  background-color:${(props) => (nightMode ? "#292929" : "white")};
  border:solid gray 1px;
  border-top:${(props) => props.name === "password" && "none"};
  border-top-left-radius:${(props) => props.name === "username" && "5px"};
  border-top-right-radius:${(props) => props.name === "username" && "5px"};
  border-bottom-right-radius:${(props) => props.name === "password" && "5px"};
  border-bottom-left-radius:${(props) => props.name === "password" && "5px"};
  width:90%;
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
    color:${(props) => (nightMode ? "white" : "grey")};
    outline:none;
  }
`;
const CheckboxContainer = Styled.div`
width:90%;
display:flex;
padding:10px;
align-items:center;
justify-content:center;
margin-top:10px;
margin-bottom:10px;
`;

const Button = Styled.button`
padding:10px 5px;
height:50px;
width:97%;
border:none;
border-radius:10px;
background-color:#0d6efd;
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
color:white;
cursor:pointer;
&:hover{
    background-color:#0d6ee5;
}`;

const Warning = Styled.span`
margin-top:10px;`;
const Login = () => {
  // const dispatch = useDispatch();
  nightMode = useSelector((state) => state.nightmodebar.toggle);

  const navigate = useNavigate();
  // const [userName, setUserName] = useState();
  // const [password, setPassword] = useState();

  // const user = {
  //   username: userName,
  //   password: password,
  // };
  // const [isnotification, setIsNotification] = useState(false);
  // const [notification, setNotification] = useState("");
  // const ManageNotification = (message) => {
  //   let msg = message;
  //   setTimeout(() => {
  //     setIsNotification(true);
  //     setNotification(msg);
  //   }, 10);
  //   setIsNotification(false);
  // };
  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   if (!password || !userName) {
  //     ManageNotification("Please Provide all the details");
  //     return;
  //   }

  //   try {
  //     dispatch(loginStart());
  //     const res = await axios.post(
  //       "https://livechat-backend.onrender.com/api/user/login",
  //       user
  //     );

  //     dispatch(loginSuccess(res.data));
  //     // navigate("/");
  //     // var user2 = {};
  //     // user2 = Users();
  //     // console.log(user2);
  //     // setTimeout(() => {
  //     navigate("/");
  //     // }, 1000);
  //     // console.log("hello world");
  //   } catch (err) {
  //     ManageNotification("username or password is incorrect");
  //     console.log(err);
  //     dispatch(loginFailure());
  //   }
  // };

  return (
    <Container>
      {/* {isnotification && <Toast message={notification} />} */}
      <Wrapper>
        <Title>
          project<Span>Share</Span>
        </Title>
        <LoginText>Please Login</LoginText>
        <InputContainer name="username">
          <Input placeholder="Username" />
        </InputContainer>
        <InputContainer name="password">
          <Input type="password" placeholder="Password" />
        </InputContainer>
        <CheckboxContainer>
          <Input
            style={{ width: "20px", marginRight: "10px" }}
            type="checkbox"
          ></Input>
          <label>Remember Me</label>
        </CheckboxContainer>
        <Button
          type="submit"
          onClick={() => {
            navigate("/]");
          }}
        >
          Login
        </Button>

        <Warning>
          Don't have an account?{" "}
          <Link to="/register" style={{ all: "unset", cursor: "pointer" }}>
            Register
          </Link>
        </Warning>
      </Wrapper>
    </Container>
  );
};

export default Login;
