import Image from "next/image";
import {Page} from "./../styles/style-utils"

import styled from "styled-components"
import { LinkPreview } from '@dhaiwat10/react-link-preview';

import {inspiration, tags} from "./../content/interesting-shit/inspiration"

const OneIdea = styled.div`
  // border: 2px solid tomato;
  // display: flex;
  padding: 1em;
  margin-top: 1em;

  hr {
    border-top: 1px solid #6666;
  }

  p {
    color: ${props => props.theme.text};
  }
`;

const Tags = styled.div`
  display: flex;
  align-tems: center;
  justify-content: start;
  gap: 0.5em;
  flex-wrap: wrap;

  p {
    font-size: 0.7rem;
    border-radius: 7px;
    background-color: ${props => props.theme.brand.c5};
    padding: 0.1em 0.7em;
  }
`;

const Idea = () => {
  return (
    <Page>
      <h1>Welcome to my Idea Factory</h1>
      <p>Collection of interesting content according to yours truly.</p>
      <div>
        {inspiration.map(p => (
          <OneIdea key={p.id}>
            <hr/>
            <p>{p.thought}</p>
            <p>{p.text}</p>
            <Tags>
              { p.tags.map(tag => <p key={tag}>{tag}</p>)}
            </Tags>
            <LinkPreview url={p.url} />
          </OneIdea>
        ))}
      </div>
    </Page>
  )
}

export default Idea;