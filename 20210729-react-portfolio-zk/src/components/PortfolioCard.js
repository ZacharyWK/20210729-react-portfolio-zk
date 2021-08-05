import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Projects from "./Projects";


function PortfolioCard(props) {
  return (
    <Wrapper>
      <Container {...props}>

      <ProjectImage
          src={}
      ></ProjectImage>

        <EntypoIcon
          name="chevron-small-left"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 140,
            position: "absolute",
            // width: 140,
            // height: 154
            bottom: 0,
            left: 0,
          }}
        ></EntypoIcon>

        <ProjectTitle>Project Title</ProjectTitle>

        <EntypoIcon
          name="chevron-small-right"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 140,
            position: "absolute",
            // width: 140,
            // height: 154,
            // marginLeft: 75,
            bottom: 0,
            right: 0,
          }}
        ></EntypoIcon>

        <ProjectOverview>Project Overview</ProjectOverview>
        
        <MaterialCommunityIconsIcon
          name="github-circle"
          style={{
            top: 0,
            left: 0,
            position: "absolute",
            color: "rgba(255,255,255,1)",
            fontSize: 100,
            width: 100,
            height: 109,
          }}
        ></MaterialCommunityIconsIcon>

        {/* <GithubRepo>GITHUB REPO</GithubRepo> */}

        <MaterialCommunityIconsIcon
          name="desktop-mac"
          style={{
            top: 0,
            right: 0,
            position: "absolute",
            color: "rgba(255,255,255,1)",
            fontSize: 100,
            width: 100,
            height: 109,
          }}
        ></MaterialCommunityIconsIcon>

        {/* <Deployed>DEPLOYED</Deployed> */}
      </Container>
    </Wrapper>
  );
}

// const Container = styled.div`
// display: flex;
// Left:193px;
// background-color: rgba(0,0,0,0.9);
// border-width: 1px;
// border-color: rgba(255,255,255,1);
// flex-direction: column;
// border-style: solid;
// box-shadow: 3px 3px 30px  1px rgba(0,0,0,1) ;
// `;

function project () {

  for (let i = 0; i < Projects.length; i++) {
    const element = array[i];
    
  }
  
}



const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  border-width: 1px;
  border-color: #ccc;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  position: absolute;
  box-shadow: 3px 3px 30px 1px #000;
  left: 193px;
  right: 193px;
  // min-width:400px;
`;

const ProjectNav = styled.div`
  // left: 0px;
  // width: 898px;
  // height: 1192px;
  // position: absolute;
  // background-color: rgba(0,0,0,0.25);
  // top: 0px;
  // flex-direction: row;
  display: flex;
`;

const ProjectTitle = styled.span`
  // font-family: Helvetica;
  // font-style: normal;
  // font-weight: 400;
  // color: rgba(255,255,255,1);
  // height: 60px;
  // width: 468px;
  // font-size: 48px;
  // text-align: center;
  // margin-left: 75px;
  // margin-top: 47px;
`;


const ProjectImage = styled.img`
  width: 500;
  height: 500;
  // position: absolute;
  // left: 0px;
  // top: 0px;
  // object-fit: contain;
`;


const ProjectOverview = styled.span`
  // font-family: Helvetica;
  // font-style: normal;
  // font-weight: 400;
  // color: rgba(255,255,255,1);
  // height: 878px;
  // width: 896px;
  // text-align: center;
`;

const GithubRepo = styled.span`
  // font-family: Helvetica;
  // top: 107px;
  // left: 0px;
  // position: absolute;
  // font-style: normal;
  // font-weight: 400;
  // color: rgba(255,255,255,1);
  // height: 46px;
  // width: 97px;
  // text-align: center;
`;

const Deployed = styled.span`
  // font-family: Helvetica;
  // top: 103px;
  // left: 0px;
  // position: absolute;
  // font-style: normal;
  // font-weight: 400;
  // color: rgba(255,255,255,1);
  // height: 48px;
  // width: 100px;
  // text-align: center;
`;


export default PortfolioCard;
