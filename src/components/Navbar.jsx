import styled from "styled-components";
import Content from "./Content"
import { icons } from '../assets'

const Container = styled.div`
width: 100%;
`
const Icon = styled.img`
padding: 0 10px 0 0;
`
const Main = styled.div` 
max-width: 1024px;
margin: 0 auto;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const List = styled.li`
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px 0;
font-weight: bolder;
color: #000;
position: relative;
background-color: #fff;

::after{
  content: '';
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${icons.shadow});
  width: 100%;
  height: 69px;
  display: block;
  bottom: -22px;
  position: absolute;
  z-index: -1;
}
`
const Items = styled.ol`
display: flex;
justify-content: center;
align-items: center;
height: 40px;
width: 100px;
cursor: pointer;
transition: all 0.3s ease-in;

:hover{
  background-color: #EEB726;
  border-radius: 5px;
  color:#fff;
}
`
const Navbar = () => {
  const { phone, clock, logo } = icons;
  return (
    <Container>
      <Main>
        <Wrapper>
          <Content email="email: support@gmail.com" number="+92-306-4094518" icon={phone} />
          <Icon src={logo} />
          <Content number="Working Hours" email="mon-sat (9:00-23:00)" icon={clock} />
        </Wrapper>
        <List>
          <Items>Home</Items>
          <Items>About Us</Items>
          <Items>Product</Items>
          <Items>Blog</Items>
          <Items>Shop</Items>
          <Items>Service</Items>
          <Items>Gallery</Items>
          <Items>Contact Us</Items>
        </List>
      </Main>

    </Container>
  )
}

export default Navbar
