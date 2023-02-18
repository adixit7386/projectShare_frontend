import React from "react";
import Styled from "styled-components";

const Container = Styled.div``;

const Wrapper = Styled.div`
margin:10px 20px;`;
const Header = Styled.div`

display:flex;
align-items:center;
justify-content:space-between;`;
const Heading = Styled.h1`
margin:0px;`;
const MiddleContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:wrap;`;

const InputItem = Styled.div`
margin:10px 20px;
width:45%;`;
const InputItemDescription = Styled.div`

margin:10px 20px;
width:95%;`;

const Label = Styled.label``;
const InputContainer = Styled.div`
border-radius:5px;
padding:5px 12px;
border:solid 1.5px grey;`;
const InputContainerDescription = Styled.div`
border-radius:5px;
border:solid 1px grey;
padding:5px 12px;`;

const MemberInputContainer = Styled.div`
display:flex;
border-radius:5px;
padding:5px 12px;
`;
const Input = Styled.input`
width:80%;
font-size:18px;
border:none;

&:focus{
    outline:none;
}`;
const Select = Styled.select`
border:none;
&:focus{
    outline:none;
}`;
const Option = Styled.option``;
const ImgContainer = Styled.div`


height:50px;
width:50px;
margin-right:10px;`;
const Image = Styled.img`
object-fit:cover;
border-radius:50%;
height:50px;
width:50px;`;

const DescriptionContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const Paragraph = Styled.textarea`
border:none;
&:focus{
    outline:none;
};
width:100%;
max-width:100%;
font-size:18px;`;

const BottomContainer = Styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
`;
const CreateButton = Styled.button`
margin:10px 30px;
padding:5px 12px;
font-size:24px;
background-color:black;
color:white;
border-radius:10px;
transition:all 0.3s ease;
cursor:pointer;
&:hover{
    transform:scale(1.1);
}

`;

const CreateProject = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Heading>Update Project</Heading>
        </Header>
        <MiddleContainer>
          <InputItem>
            <Label>Title</Label>
            <InputContainer>
              <Input type="text" placeholder="title" />
            </InputContainer>
          </InputItem>
          <InputItem>
            <Label>Visibility</Label>
            <InputContainer>
              <Input type="text" placeholder="public" />
              <Select>
                <Option>Public</Option>
                <Option>Private</Option>
              </Select>
            </InputContainer>
          </InputItem>
          <InputItem>
            <Label>Link</Label>
            <InputContainer>
              <Input
                type="text"
                placeholder="https://www.github.com/sdlfkjsdf"
              />
            </InputContainer>
          </InputItem>
          <InputItem>
            <Label>Members</Label>
            <MemberInputContainer>
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
              <ImgContainer>
                <Image
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                />
              </ImgContainer>
            </MemberInputContainer>
          </InputItem>
        </MiddleContainer>

        <DescriptionContainer>
          <InputItemDescription>
            <Label>Description</Label>
            <InputContainerDescription>
              <Paragraph placeholder="Description of Project" />
            </InputContainerDescription>
          </InputItemDescription>
        </DescriptionContainer>
        <BottomContainer>
          <CreateButton>Update</CreateButton>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default CreateProject;
