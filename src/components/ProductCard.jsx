import styled from "styled-components"
import { icons } from "../assets"

const Container= styled.div`
background-color: #fff;
border-radius: 5px;
height: 260px;
width: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px 0;
`
const Image= styled.img`
width: 110px;
height: 110px;
border-radius: 50%;
object-fit: cover;
`
const Content= styled.div``
const Hr = styled.hr`
  background-color: grey;
  margin: 15px 0;
`
const Text= styled.h4`
text-align: center;
`
const Icon= styled.img`
background-color: #${(props)=>props.color};
padding-right: 5px;
margin: 0;
`
const Price= styled.h5`
display: flex;
padding: 5px 0;
`
const Cart= styled.div`
display: flex;
justify-content: center;
width: 100%;
border-radius: 2px;
border: 1px solid #EEB726;
cursor: pointer;
`
const CartText= styled.p`
  font-size: 13px;
  font-weight: bolder;
  padding: 0 0 0 5px;
`
const ProductCard = ({image}) => {

  return (
    <Container>
        <Image src={image} />
      <Content>
        <Hr/>
        <Text>Greek Salad</Text>
        <Icon src={icons.starFilled} color="fff"/>
        <Price>$ 90</Price>
        <Cart>
          <Icon src={icons.cart} color="EEB726" />
          <CartText>Add to cart</CartText>
        </Cart>
      </Content>
    </Container>
  )
}

export default ProductCard
