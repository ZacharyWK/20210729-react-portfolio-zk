import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function ContactMe(props) {
  return (
    <Wrapper>
    <Container {...props}>
      <FontAwesomeIcon
        name="envelope-o"
        style={{
          color: "rgba(255,255,255,1)",
          fontSize: 100,
          // width: 199,
          // height: 199,
          marginBottom: 10,
          marginTop: 100,
          marginLeft: 10
        }}
      ></FontAwesomeIcon>
      <EmailText><a href="mailto:Email@email.com">ZACHARY.W.KRAUSE@GMAILL.COM</a></EmailText>
      <FeatherIcon
        name="phone"
        style={{
          color: "rgba(255,255,255,1)",
          fontSize: 100,
          // width: 200,
          // height: 201,
          marginTop: 100,
          marginLeft: 10,
          marginBottom: 10
        }}
      ></FeatherIcon>
      <PhoneText>402.606.8089</PhoneText>
    </Container>
    </Wrapper>
  );
}

// const Container = styled.div`
//   display: flex;
//   background-color: rgba(0,0,0,0.9);
//   border-width: 1px;
//   border-color: rgba(255,255,255,1);
//   flex-direction: column;
//   border-style: solid;
//   box-shadow: 3px 3px 30px  1px rgba(0,0,0,1) ;
// `;


const Wrapper = styled.div`
display: flex;
justify-content:center;
`;

const Container = styled.div`
display: flex;
// border-width: 1px;
// border-color: #CCC;
background-color: rgba(0,0,0,0.9);
overflow: hidden;
flex-direction: column;
border-style: solid;
position: absolute;
box-shadow: 3px 3px 30px  1px #000 ;
left:193px;
right:193px;
justify-content:center;
// min-width:400px;
`;

const EmailText = styled.span`
  font-family: Helvetica;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 24px;
  // width: 498px;
  // height: 38px;
  text-align: center;
  // margin-top: -402px;
  // margin-left: 650px;
`;

const PhoneText = styled.span`
  font-family: Helvetica;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 24px;
  // width: 264px;
  // height: 32px;
  text-align: center;
  // margin-top: 364px;
  margin-bottom: 100px;
`;

export default ContactMe;
