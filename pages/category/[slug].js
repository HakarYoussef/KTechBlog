import { useEffect, useState } from 'react';
import { Categories, PostCard } from '../../components';
import { getCategories, getCategoryPosts } from '../../services';

export default function CategoryPage({ posts, categoryData }) {
  return (
    <div className="container mx-auto px-20 mb-8">
      <div className="flex items-center border-l-8 mb-8 h-12 border-pink-500 ">
        <h3 className="font-semibold text-3xl ml-5 ">Category</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8  col-span-1">
          {posts.map((post, i) => (
            <div key={i}>
              <PostCard post={post.node} />
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const data = await getCategoryPosts(params.slug);
  const categoryData = await getCategories(params.slug);
  return {
    props: {
      posts: data,
      categoryData,
    },
  };
};
