import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const Heading1 = styled.h1`
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Heading2 = styled.h2`
  font-weight: 700;
  margin: 0;
  padding: 0;

  position: relative;

  &::before {
    content: '${(props) => props.index}';
    position: absolute;
    font-size: 8rem;
    opacity: 0.1;
    top: -70px;
    left: -30px;
    color: lightgray;
    z-index: -10;

    -webkit-text-stroke: 2px black;
    /* -webkit-text-fill-color: white;  */
  }
`;

const SubHeading = styled.p`
  margin-top: 0;
  margin-bottom: 4rem;
`;

const PostContainer = styled.section`
  margin-bottom: 4rem;

  color: ${(props) => props.theme.text};

  a {
    color: ${(props) => props.theme.text};
  }
`;

const Summary = styled.p`
  padding: 0;
  margin: 0;
`;


const Post = ({ post, index }) => {
  return (
    <PostContainer index={index}>
      <Heading2 index={index}>{post.frontmatter.title}</Heading2>
      <Summary>{post.frontmatter.summary}</Summary>
      <Link href={`/blog/${post.slug}`}>
        <a>Read More &#8594;</a>
      </Link>
    </PostContainer>
  );
};

const Posts = ({ posts }) => {
  const len = posts.length;
  console.log(len);
  return (
    <div>
      <Heading1> All published articles</Heading1>
      <SubHeading>There are a total of {len} posts in this blog.</SubHeading>
      {posts.map((post, index) => (
        <Post post={post} index={len - index} key={index + 1} />
      ))}
    </div>
  );
};


export default Posts;