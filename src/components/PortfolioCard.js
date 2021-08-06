import React, { useState } from "react";
import styled, { css } from "styled-components";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft,FaGithub,FaRegWindowRestore} from "react-icons/fa";
import { ProjectData } from "./ProjectData";



const PortfolioCard = ({projects}) => {
  const [current, setCurrent] = useState(0);
  const length = projects.length;

  const nextProject=()=>{
    setCurrent(current===length - 1 ? 0 : current + 1)
  };

  const prevProject=()=>{
    setCurrent(current===0 ? length - 1 : current - 1)
  };



 if(!Array.isArray(projects)|| projects.length<=0){return null}

  return (
    <Wrapper>
    <Portfolio><h1 style={{color:"white", textAlign:"center", fontFamily:"helvetica"}}>PORTFOLIO</h1></Portfolio>
    <Container>
    <section className="projectSection">
      

      {ProjectData.map((project, index)=>{
        return(
          <div className={index===current?"displayedProject":"inactiveProject"}key={index}>
            {index === current && (<h2 style={{color:"white", textAlign:"center", fontFamily:"helvetica"}}>{project.name}</h2>)}
            {index === current && (<img className="projectImage" src={project.img} alt={project.name+" Image"} />)}
            {index === current && (<a href={project.git} target="_blank"><FaGithub className="git" /></a>)}
            {index === current && (<a href={project.dep} target="_blank"><FaRegWindowRestore className="dep" /></a>)}
          </div>
          )
          
      })}

    </section>
    <FaArrowAltCircleLeft  className="prev" 
      onClick={prevProject}
      />
      <FaArrowAltCircleRight  className="next" 
      onClick={nextProject}
      />
     

    </Container>
    </Wrapper>
  )
}

const Portfolio = styled.div``
const Wrapper = styled.div``

const Container = styled.div`
  display: flex;
  // border-width: 1px;
  // border-color: #ccc;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  position: absolute;
  box-shadow: 3px 3px 30px 1px #000;
  left: 193px;
  right: 193px;
  margin: auto;
  min-width:400px;
`;

export default PortfolioCard;

