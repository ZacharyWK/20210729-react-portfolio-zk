import React from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function About() {
  return (
<Wrapper> 
    <Container>
        <AboutMe>Zachary Krause</AboutMe>
      <AboutMeTitleContainer>
        <EntypoIcon
        name="database"
        style={{
          top: 0,
          left: 0,
          position: "absolute",
          // bottom:0,
          color: "rgba(255,255,255,1)",
          fontSize: 100
        }}
      ></EntypoIcon>
            <EntypoIcon
        name="code"
        style={{
          top: 0,
          right: 0,
          position: "absolute",
          // bottom:0,
          color: "rgba(255,255,255,1)",
          fontSize: 100
        }}
      ></EntypoIcon>
      <AboutMeText>
        
        Information Technologies professional with 10+ years overall experience.
        Over 5 years working in the database management field, and
        possesses 2 industry related degrees.
        Currently attending University of Arizona’s Full Stack
        Development certificate program.
        MY EXPERIENCE
        Full Stack Development - Certificate in progress: primarily
        working with: HTML5, CSS3, Javascript, Node and Mysql and React.
        Database Management - Over 5 years performing Extract, Transform
        and Load (ETL) procedures and Cleaning Data for productions. Utilized
        various Database Management Systems (DBMS) to standardize data set
        productions for clients.
        Design - Over 10 years freelance experience in visual design
        creating digital content such as website templates, 3D models and logos.
      </AboutMeText>
      </AboutMeTitleContainer>
    </Container>
</Wrapper>
  );
}

const Wrapper = styled.div`
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
// min-width:400px;
`;

const AboutMeTitleContainer = styled.div`
  padding: 100px;
`;

const AboutMe = styled.span`
  display:flex;
  justify-content: center;
  font-family: Helvetica;
  font-size: 48px;
  color: rgba(255,255,255,1);
  padding-top: 10px;
`;

const AboutMeText = styled.span`
  font-family: Helvetica;
  color: rgba(255,255,255,1);
`;

export default About;
