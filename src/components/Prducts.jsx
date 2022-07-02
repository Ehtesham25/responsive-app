import styled from "styled-components"
import ProductCard from "./ProductCard"
import { icons,images } from "../assets"

const Container= styled.div`
width: 100%;
background-color: #E4E4E4;
`
const Main= styled.div`
max-width: 1024px;
margin: 0 auto;
`
const Text= styled.h4`
text-align: center;
font-size: 25px;
font-weight: bold;
padding: 10px 0;
letter-spacing: 1px;
text-transform: uppercase;
position: relative;
::after{
  content: '';
  background-image: url(${icons.hr});
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  width: 100%;
  height: 39px;
  position: absolute;
}
`
const Card = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  flex-wrap: wrap;
`
const Prducts = () => {
const{plate,plate2,plate3}= images;
  return (
    <Container>
      <Main>
        <Text>top Products.</Text>
        <Card>
        <ProductCard image={plate}/>
        <ProductCard image={plate2} />
        <ProductCard image={plate3} />
        </Card>
      </Main>
    </Container>
  )
}

export default Prducts
