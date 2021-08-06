import React, { Component } from "react";
import styled, { css } from "styled-components";


function Main(props) {
  return (
    <Container>
        <BackgrondImage
          src={require("../assets/images/IMG_4459.jpg")}
        ></BackgrondImage>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  opacity: 0.9;
  background-color: rgba(0,0,0,1);
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const BackgrondImage = styled.img`
  display: flex;
 
  // opacity: 0.9;
  object-fit: fill;
`;

const BackgrondImageRow = styled.div`
  // flex-direction: row;
  // display: flex;
`;

const BackgrondImageRowFiller = styled.div`
  // flex: 1 1 0%;
  // flex-direction: row;
  // display: flex;
`;

export default Main;
