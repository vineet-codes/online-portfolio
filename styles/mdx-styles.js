import React from 'react';
import styled from "styled-components"


const BlockQuote = styled.blockquote`
  margin:0;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
  padding-left: 1em;

  color: #999;
  font-style: italic;
  border-left: 0.4em solid ${(props) => props.theme.brand.c1};

`;

export const components = {
  blockquote: (props) => {
    return <BlockQuote {...props} />
  }
}