import React from "react";
import styled from "styled-components";

// Title コンポーネントの作成、中身は h1 タグにスタイルを適応したもの
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// Wrapper の作成、中身は section タグにスタイルを適応したもの
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
// 作成した Title と Wrapper はコンポーネントとして利用できる

const HelloWorld = () => (
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>
);

export default HelloWorld;
