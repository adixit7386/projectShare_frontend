import React from "react";
import Styled from "styled-components";
import UploadIcon from "@mui/icons-material/Upload";
const Container = Styled.div``;
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
const Input = Styled.input``;
const Label = Styled.label`
display:flex;
align-items:center;
margin-bottom:10px;
justify-content:center;`;
const Profile = () => {
  return (
    <Container>
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
            <NameContainer>
              <Name>Abhay Dixit</Name>
            </NameContainer>
          </NameImgContainer>
        </HeadContainer>
      </Wrapper>
    </Container>
  );
};

export default Profile;
