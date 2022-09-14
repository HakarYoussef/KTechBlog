import { useEffect, useState } from 'react';
import { getSimilarPosts, getRecentPosts } from '../services';
import moment from 'moment';
import Link from 'next/link';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
    setIsLoading(true);
  }, [categories, slug]);

  return (
    <>
      <div className="bg-white shadow-sm rounded-lg p-8 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {slug ? 'Related Posts' : 'Recent Posts'}
        </h3>
        {!isLoading
          ? relatedPosts.map((post) => (
              <div key={post.title} className="flex   items-center w-full mb-4">
                <div className="w-24  relative rounded-sm  h-16 bg-gray-100 flex-none ">
                  <span className=" align-middle  h-full rounded-sm absolute object-cover " />
                </div>
                <div className="flex-grow ml-4 ">
                  <div className="w-48   rounded-sm  h-5 bg-gray-100 mb-5" />

                  <div className="w-full rounded-sm  h-5 bg-gray-100 " />
                </div>
              </div>
            ))
          : relatedPosts.map((post) => (
              <div key={post.title} className="flex   items-center w-full mb-4">
                <div className="w-24  relative rounded-sm  h-16 bg-orange-600 flex-none ">
                  <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className=" align-middle  h-full rounded-sm absolute object-cover "
                  />
                </div>
                <div className="flex-grow ml-4">
                  <p className="to-gray-400 text-xs">
                    {moment(post.createdAt).format('DD MM, YYYY')}
                  </p>
                  <Link href={`/post/${post.slug}`} className="text-sm">
                    {post.title}
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default PostWidget;
