import React, { Component } from "react";
import styled, { css } from "styled-components";
import TransparentBtn from "./TransparentBtn";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import {NavLink} from 'react-router-dom';


function Nav(props) {
  return (
    <Container {...props}>
      <BackgroundRStack>
        <BackgroundR>

          <ProfileImage
            src={require("../assets/images/84305264.jpg")}
          ></ProfileImage>

          <a href="https://drive.google.com/file/d/1m1w7WnorXADJcUWuxbIzSIQO01me6FYO/view?usp=sharing" target="_blank"><TransparentBtn
            style={{
              height: 69,
              width: 150,
              backgroundColor: "rgba(0,0,0,1)"
            }}
            caption="MY RESUME"
          ></TransparentBtn></a>

          <NavLink to='/contact'><TransparentBtn
            style={{
              height: 69,
              width: 150,
              backgroundColor: "rgba(0,0,0,1)"
            }}
            caption="CONTACT ME"
          ></TransparentBtn></NavLink>

          <NavLink to='/about'><TransparentBtn
            style={{
              height: 69,
              width: 150,
              backgroundColor: "rgba(0,0,0,1)"
            }}
            caption="ABOUT ME"
          ></TransparentBtn></NavLink>

          <NavLink to='/' exact><EntypoIcon
            name="home"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 40,
              width: 40,
              height: 44,
              marginTop: 10,
              marginLeft: 76
            }}
          ></EntypoIcon></NavLink>

          <DeviderLine></DeviderLine>

          <a href="https://github.com/ZacharyWK" target="_blank" style={{marginTop: 20}}>
          <MaterialCommunityIconsIcon
            name="github-circle"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 40,
              width: 40,
              height: 43,
              marginTop: 40,
              marginLeft: 77
            }}
          ></MaterialCommunityIconsIcon>
          </a>

          <a href="https://www.linkedin.com/in/zacharywk/" target="_blank" style={{marginTop: 20}}>
          <EntypoIcon
            name="linkedin-with-circle"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 35,
              width: 35,
              height: 38,
              marginTop: 33,
              marginLeft: 79
            }}
          ></EntypoIcon>
          </a>

          <a href="https://www.reddit.com/user/KZ-ZK" target="_blank" style={{marginTop: 20}}>
          <FontAwesomeIcon
            name="reddit"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 34,
              width: 34,
              height: 34,
              marginTop: 42,
              marginLeft: 79
            }}
          ></FontAwesomeIcon>
          </a>

        </BackgroundR>
        {/* <ZacharyKrause1>{props.portfolio || "ZACHARY KRAUSE"}</ZacharyKrause1> */}
      </BackgroundRStack>

    </Container>

  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right:0px;
`;

const BackgroundR = styled.div`
  top: 0px;
  width: 193px;
  position: relative;
  background-color: rgba(0,0,0,1);
  bottom: 0px;
  flex-direction: column;
  display: flex;
`;

const ProfileImage = styled.img`
  width: 192px;
  height: 100%;
  object-fit: contain;
`;

const DeviderLine = styled.div`
  width: 81px;
  height: 1px;
  background-color: rgba(255,255,255,1);
  margin-top: 30px;
  margin-left: 56px;
`;

// const ZacharyKrause1 = styled.span`
//   font-family: Helvetica;
//   top: 1076px;
//   left: 0px;
//   position: relitive;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255,255,255,1);
//   transform: rotate(90.00deg);
//   text-align: center;
//   font-size: 64px;
//   // width: 587px;
//   // height: 89px;
// `;

const BackgroundRStack = styled.div`
  right:0px;
`;

export default Nav;
