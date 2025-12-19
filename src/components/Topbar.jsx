import React from 'react'
import styled from 'styled-components';
 
import { icons } from '../assets';

const Container=styled.div`
background-color: #222530;
  width: 100%;
  `
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  height: 40px;
`
const SocialIcons=styled.div`
display: flex;
gap: 10px;
`
const Icon= styled.img`
cursor: pointer;
`
const Auth=styled.div`
display: flex;
gap: 5px;
align-items: center;
`
const Text= styled.h4`
color:#fff;
font-size: 10px;
font-weight: 640;
cursor: pointer;
`
const Span= styled.span`
color:#fff;
`


const Topbar = () => {
  const{facebook,twitter,google,instagram,cart,user,edit}= icons;
  return (
    <Container>
      <Main>
      <SocialIcons>
        <Icon src={facebook} />
        <Icon src={twitter} />
        <Icon src={google} />
        <Icon src={instagram} />
      </SocialIcons>
      <Auth>
      <Icon src={user} />
      <Text>Login</Text>
      <Span>|</Span>
      <Icon src={edit} />
      <Text>Register Now</Text>
      <Span>|</Span>
      <Icon src={cart} />
      <Text>0-items.</Text>
      </Auth>
      </Main>
    </Container>
  )
}

export default Topbar
