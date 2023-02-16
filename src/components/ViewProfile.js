import React from "react";
import Styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Container = Styled.div`
margin:20px 20px ;
border-radius:20px;
box-shadow:0px 0px 10px lightgrey;`;

const Wrapper = Styled.div`
padding:10px;`;

const HeadContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
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
const JobTitleContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;`;
const JobTitleContainerText = Styled.span`
font-size:18px;`;
const StatusContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;`;
const StatusContainerText = Styled.span`
font-size:18px;`;
const DOBContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;`;
const DOBContainerText = Styled.span`
font-size:18px;`;
const EmailContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;`;
const EmailContainerText = Styled.span`
font-size:18px;`;
const ContactContainer = Styled.div`
display:flex;
align-items:center;
justify-content:center;`;
const ContactContainerText = Styled.span`
font-size:18px;`;
const DescriptionContainer = Styled.div`
text-align:justify;
width:85%;`;
const DescriptionContainerText = Styled.span`
font-size:18px;
color:grey;
`;

const Input = Styled.input``;

const Label = Styled.label`
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
color:grey;`;

const DetailInput = Styled.div`
width:40%;
margin:10px 20px;`;

const InputContainer = Styled.div`
margin-top:10px;
padding:2px 3px;
border:solid 1px grey;
border-radius:5px;
display:flex;
align-items:center;
justify-content:center;
`;

const InputDetail = Styled.input`
padding:7px 12px;
&:focus{
  outline:none;
};
font-size:15px;
border:none;
flex:4;`;

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

const EducationDetailsContent = Styled.div`
display:flex;
align-items:center;
justify-content:center;
width:85%;
margin-top:10px;
`;

const EducationDetailsData = Styled.span`
font-size:18px;`;

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
            </ImgContainer>
            <NameContainer>
              <Name>Abhay Dixit</Name>
            </NameContainer>
          </NameImgContainer>
        </HeadContainer>

        <DetailContainer>
          <DetailInput>
            <JobTitleContainer>
              <JobTitleContainerText>SDE AMAZON</JobTitleContainerText>
            </JobTitleContainer>
          </DetailInput>
          <DetailInput>
            <StatusContainer>
              <StatusContainerText>2h mon-fri</StatusContainerText>
            </StatusContainer>
          </DetailInput>

          <DetailInput>
            <DOBContainer>
              <DOBContainerText>jan-15-2004</DOBContainerText>
            </DOBContainer>
          </DetailInput>
          <DetailInput>
            <EmailContainer>
              <EmailContainerText>adixit7386@gmail.com</EmailContainerText>
            </EmailContainer>
          </DetailInput>
          <DetailInput>
            <ContactContainer>
              <ContactContainerText>+91 7880987614</ContactContainerText>
            </ContactContainer>
          </DetailInput>
          <DescriptionContainer>
            <DescriptionContainerText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              totam quis officia enim tempora at voluptate distinctio alias,
              quod minus sed fugit dolor. Eaque et dolorum esse atque neque
              quidem consequuntur voluptate tenetur ipsam illo repudiandae ullam
              vitae magnam eius nisi veniam nobis, dicta autem? Nostrum quod
              totam, aliquid ratione adipisci asperiores molestias? Reiciendis
            </DescriptionContainerText>
          </DescriptionContainer>
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
          </EducationDetailsHead>
          <EducationDetailsContent>
            <Qualification>
              <EducationDetailsData>XII</EducationDetailsData>
            </Qualification>
            <Institution>
              <EducationDetailsData>
                Vidyagyan School Sitapur
              </EducationDetailsData>
            </Institution>
            <Score>
              <EducationDetailsData>91.4</EducationDetailsData>
            </Score>
            <Year>
              <EducationDetailsData>2029</EducationDetailsData>
            </Year>
          </EducationDetailsContent>
        </EducationDetails>

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
          </DetailContainer>
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Profile;
