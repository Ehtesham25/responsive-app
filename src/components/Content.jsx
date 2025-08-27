import styled from 'styled-components';

const Container= styled.div`
background-color: #fff;
display: flex;
margin: 14px 0;
align-items: center;
`
const Icon= styled.img`
padding: 0 5px 0 0;
`
const Main= styled.div``
const Text= styled.p`
font-size: 15px;
color: #000;
margin-bottom: 3px;
font-weight: ${(props)=>props.fontWeight};
`
const Content = ({icon,number,email }) => {

  return (
    <Container>
      <Icon src={icon} />
      <Main>
        <Text fontWeight="bold">{number}</Text>
        <Text>{email}</Text>
      </Main>
    </Container>
  )
}

export default Content
