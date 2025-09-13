import styled from "styled-components";

import { images, icons } from "../assets";

const Container= styled.div`
width: 100%;
background-image: url(${images.hero});
background-repeat: no-repeat;
object-fit: cover;
height: 550px;
` 
const Main= styled.div`
max-width: 1024px;
height: calc(100vh - 170px);
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
`
const Left= styled.div``
const LeftContent= styled.div`
display: flex;
align-items: center;
padding-bottom: 10px;
`
const Icon= styled.img``
const Text= styled.span`
color: #000;
font-size: ${(props)=>props.size};
font-weight: ${(props)=>props.weight};
`
const Right= styled.div``

const Header = () => {
  return (
    <Container>
      <Main>
      <Left>
        <LeftContent>
        <Text size="30px" weight="bold">Wellcome to, &nbsp; </Text> 
        <Icon src={icons.logo2} />
        </LeftContent>
        <Text size="25px" weight="590">The World Best food Devlivery Webiste.</Text>
      </Left>
      <Right>
       <Icon src={images.straw} />
      </Right>
      </Main>
    </Container>
  )
}

export default Header;
