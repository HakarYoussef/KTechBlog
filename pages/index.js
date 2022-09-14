import Head from 'next/head';
import { Categories, PostCard, PostWidget } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-20 mb-8">
      <Head>
        <title>Tech Blog</title>
        <meta name="Technology Blogs" content="Technology Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8  col-span-1">
          {posts.map((post, postId) => (
            <div key={postId}>
              <PostCard post={post.node} />
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
};
