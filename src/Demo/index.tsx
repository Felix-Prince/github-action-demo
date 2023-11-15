import React, { useEffect } from "react";
import styled, { css } from "styled-components";

const Demo = () => {
  const Comp = styled.div`
    width: 100%;
    background: red;
  `;
  return <Comp as="p">this is a demo page;</Comp>;
};
export default Demo;
