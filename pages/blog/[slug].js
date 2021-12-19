import Head from 'next/head';

import React from 'react';
import { getAllPosts, getSinglePost } from "../../utils/mdx"
import { getMDXComponent } from 'mdx-bundler/client';



export default function Blog({ code, frontMatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <article>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <main>
        <div>{frontMatter.title}</div>
        <div>
          By: Vineet Kumar Singh | {frontMatter.readingTime.text} |{' '}
          {frontMatter.wordCount} Words| Publication Date:{' '}
          {frontMatter.publishedAt}
        </div>
        <div>
          <Component />
        </div>
      </main>
    </article>
  );
}

export async function getStaticPaths(){
  const rawPosts = await getAllPosts();
  return {
    paths: rawPosts.map(post => ({
      params: {
        slug: post.slug,
        // post
      }
    })),
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  console.log('params',params);
  const post = await getSinglePost(params.slug);
    return {props: post}
}