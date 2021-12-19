import Head from "next/head"

import Home from "../components/Home"
import Nav from "../components/Nav"

import { getAllPosts } from "../utils/mdx"


const Blog = ({ posts }) => {
  return (
    <>
    <Head>
      <title>Vineet | Home</title>
    </Head>
    <Nav/>
    <Home posts={posts}/>
    </>
  )
}

export default Blog;

export async function getStaticProps() {
  const rawPosts = getAllPosts();

  const temp = rawPosts.map((post) => {
    // post.publishedAt = new Date(post.publishedAt);
    post.frontmatter.publishedAt = new Date(post.frontmatter.publishedAt);

    return post;
  });

  const postsObject = temp.sort(
    (a, b) => b.frontmatter.publishedAt - a.frontmatter.publishedAt
  );

  const allPosts = postsObject.map((post) => {
    post.frontmatter.publishedAt = JSON.stringify(post.frontmatter.publishedAt);
    return post;
  });

  // console.log(allPosts);

  // show only non-draft posts in the catalog
  const posts = allPosts.filter((post) => post.frontmatter.draft === false);

  return { props: { posts }};
}