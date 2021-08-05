import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
// import Micons from "material-ui/icons";

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

const Projects = [
  {
      "name":"Group Project 2 - Super Roster",
      "img":"../assets/images/Project-02.png",
      "git":"https://github.com/methom21/Project-2-MT-ZK-JA",
      "dep":"https://super-roster.herokuapp.com/",
      "key":"100001"
  },
  {
      "name":"Group Project 1 - PhoenixSky",
      "img":"../assets/images/Project-01.png",
      "git":"https://github.com/stongems/PhoenixSky/tree/main",
      "dep":"https://stongems.github.io/PhoenixSky/",
      "key":"100002"
  },
  {
      "name":"Workout Tracker",
      "img":"../assets/images/01-WT.png",
      "git":"https://github.com/ZacharyWK/20210722-workout-tracker-zk",
      "dep":"https://workout-tracker-zk.herokuapp.com/",
      "key":"100003"
  },
  {
      "name":"Budget Tracker",
      "img":"../assets/images/02-BT.png",
      "git":"https://github.com/ZacharyWK/20210726-budget-tracker-zk",
      "dep":"https://budget-zk.herokuapp.com/",
      "key":"100004"
  },

]

function PortfolioCard(props) {
  return (
    <Wrapper>
      <Container {...props}>

      <Carousel>
            {
                Projects.map( (item, i) => <div key={i} item={item} /> )
            }
      </Carousel>

        
        {/* <MaterialCommunityIconsIcon
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
        ></MaterialCommunityIconsIcon> */}

      </Container>
    </Wrapper>
  );
}

// function Item(props)
// {
//     return (
//         <Paper>
//             <h2>{props.item.name}</h2>
//             {/* <p>{props.item.description}</p> */}

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }

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

