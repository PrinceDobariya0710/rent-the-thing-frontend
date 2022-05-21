import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../Responsive";

const Container = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom:50px;
  ${mobile({ height: "45vh", width:"100%" })}
`;

const Arrow = styled.section`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.header`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({ height: "40vh" })}
`;

const ImgContainer = styled.section`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  ${mobile({ height: "250px", width:"200px" })}
`;

const InfoContainer = styled.section`
  flex: 1;
  padding: 50px;
  ${mobile({padding:"0px" })}
`;

const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize:"14px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ fontSize:"10px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  ${mobile({ fontSize:"9px",padding:"2px" })}
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
  return (
    <Container>
    <Arrow direction="left" onClick={() => handleClick("left")}>
      <KeyboardArrowLeftIcon />
    </Arrow>
    <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item) => (
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      ))}
    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
    <KeyboardArrowRightIcon/>
    </Arrow>
  </Container>
  )
}

export default Slider;
