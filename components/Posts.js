import Link from 'next/link';

const Post = ({post}) => {
  return (
    <div className="post">
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.publishedAt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a>Read More &#8594;</a>
      </Link>
    </div>
  )
}

const Posts = ({posts}) => {
  return (
      <div className="posts">
          {posts.map(post => <Post key={post.slug} post={post}/>)}
      </div>
  )
}

export default Posts;