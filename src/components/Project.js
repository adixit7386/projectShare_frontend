import React from "react";
import Styled from "styled-components";

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
const Project = () => {
  return (
    <Container>
      <Wrapper>
        <HeadContainer>
          <Heading>Image InPainting</Heading>
        </HeadContainer>
        <MiddleContainer>
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
            <ImgContainer>
              <Image
                src={
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
              />
            </ImgContainer>
          </PeopleContainer>
          <LinkContainer>
            <Link href={"https://www.github.com/adixit7386"}>
              https://www.github.com/adixit7386
            </Link>
          </LinkContainer>
        </MiddleContainer>
        <BottomContainer>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            repellat atque tempora similique corrupti consequatur officia nulla,
            deserunt reprehenderit assumenda minus pariatur eos perferendis, qui
            provident accusamus ab molestias vel consequuntur cum. Voluptatibus
            quaerat ipsa, qui corporis excepturi officiis hic delectus minima
            sapiente temporibus enim minus molestias facere accusamus rerum
            praesentium. Quia magni perferendis distinctio suscipit porro ipsam
            atque nam tenetur, ipsum exercitationem sapiente fugiat eius quidem
            voluptatibus unde blanditiis aspernatur harum similique. Voluptates
            non reprehenderit exercitationem laboriosam totam sapiente quaerat
            labore esse voluptatibus officia rem eos, quam rerum magni
            repellendus eius nobis, sunt dicta unde laborum quia, ipsum
            consequatur. Et commodi vitae nostrum, quam maxime saepe nihil
            blanditiis iure quas quia vel aliquid, tenetur explicabo quis
            temporibus ex voluptates consequuntur quae ad molestiae, recusandae
            laborum fuga itaque. Magni sequi optio nulla, eveniet impedit odit
            eaque porro nam ipsum assumenda facilis id animi dolores nobis
            quibusdam sapiente tempora nemo molestiae tempore veniam nostrum
            expedita atque nisi consequuntur? Illo minima dolorum dolore
            deleniti fuga aliquam temporibus sapiente doloremque odio voluptas
            mollitia illum asperiores soluta, possimus aspernatur molestias
            tenetur. Quod voluptatum necessitatibus, eligendi nihil praesentium
            beatae voluptates totam assumenda, hic similique iure distinctio
            earum perspiciatis! Quae suscipit, alias inventore animi quod
            temporibus.
          </Paragraph>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default Project;
