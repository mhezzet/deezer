import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default function Loading() {
  return (
    <Container>
      <Spin />
    </Container>
  );
}
