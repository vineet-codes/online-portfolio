import React from 'react';
import styled from "styled-components"


const BlockQuote = styled.blockquote`
  margin:0;
  padding-top: 0.01em;
  padding-bottom: 0.01em;
  padding-left: 0.8em;

  color: ${(props) => props.theme.brand.c4};
  font-style: italic;
  border-left: 0.2em solid ${(props) => props.theme.brand.c1};

`;

const H2 = styled.h2`  
  // background: ${(props) => props.theme.brand.c1};
  color: black;
`;

export const components = {
  blockquote: (props) => {
    return <BlockQuote {...props} />
  },
  h2: (props) => {
    return <H2 {...props} />
  }
}