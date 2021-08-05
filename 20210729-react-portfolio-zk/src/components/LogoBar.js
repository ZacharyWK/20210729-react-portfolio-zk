import React, { Component } from "react";
import styled, { css } from "styled-components";

function LogoBar(props) {
  return (
    <Container {...props}>
      <BackgroundLStack>
        <BackgroundL>

          <ReactLogo
            src={require("../assets/images/W-react-100.png")}
          ></ReactLogo>

          <JsLogo 
            src={require("../assets/images/W-js-1001.png")}
          ></JsLogo>

          <HtmlLogo
            src={require("../assets/images/W-html-5-100.png")}
          ></HtmlLogo>

          <CssLogo 
            src={require("../assets/images/W-css-100.png")}
            ></CssLogo>

          <MysqlLogo
            src={require("../assets/images/W-mysql-100.png")}
          ></MysqlLogo>

        </BackgroundL>
        {/* <Portfolio1>{props.portfolio || "PORTFOLIO"}</Portfolio1> */}
      </BackgroundLStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content:center;
  // background-color: rgba(0,0,0,1);
  flex-direction: column;
  flex-direction: column;
  position: absolute;
  Left:0px;
`;

const BackgroundL = styled.div`
  top: 0px;
  left: 72px;
  width: 194px;
  position: relative;
  // background-color: rgba(0,0,0,1);
  // bottom: 0px;
  flex-direction: column;
  display: flex;
`;

const ReactLogo = styled.img`
  width: 124px;
  height: 100%;
  margin-top: 20px;
  margin-left: 35px;
  object-fit: contain;
`;

const JsLogo = styled.img`
  width: 124px;
  height: 100%;
  margin-top: 20px;
  margin-left: 35px;
  object-fit: contain;
`;

const HtmlLogo = styled.img`
  width: 124px;
  height: 100%;
  margin-top: 20px;
  margin-left: 35px;
  object-fit: contain;
`;

const CssLogo = styled.img`
  width: 124px;
  height: 100%;
  margin-top: 20px;
  margin-left: 35px;
  object-fit: contain;
`;

const MysqlLogo = styled.img`
  width: 124px;
  height: 100%;
  margin-top: 20px;
  margin-left: 35px;
  object-fit: contain;
`;

// const Portfolio1 = styled.span`
//   font-family: Roboto;
//   top: 349px;
//   left: 0px;
//   position: absolute;
//   font-style: normal;
//   font-weight: 400;
//   color: rgba(255,255,255,1);
//   transform: rotate(90.00deg);
//   text-align: center;
//   font-size: 64px;
//   width: 337px;
//   height: 77px;
// `;

const BackgroundLStack = styled.div`
  width: 337px;
  flex: 1 1 0%;
  margin-left: -72px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default LogoBar;
