import React, { Component } from "react";
import styled, { css } from "styled-components";

function TransparentBtn(props) {
  return (
    <Container {...props}>
      <Caption>{props.caption || "BUTTON"}</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #212121;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-width: 88px;
  padding-left: 16px;
  padding-right: 16px;
`;


const Caption = styled.span`
  font-family: Helvetica;
  color: #fff;
  font-size: 14px;
`;

export default TransparentBtn;
