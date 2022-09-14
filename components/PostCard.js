import Link from 'next/link';
import moment from 'moment';
import { HiOutlineCalendar } from 'react-icons/hi';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-0 lg:p-5 mb-10">
      <div className="relative overflow-hidden shadow-sm pb-80 mb-5">
        <Link
          href={`/post/${post.slug}`}
          className="animate-slowfadein w-full bg-cover bg-center h-80"
        >
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="object-top cursor-pointer  absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </Link>
      </div>
      <h1 className="transition duration-200 text-left mb-5 cursor-pointer text-xl hover:text-pink-600  font-bold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex items-center  mb-5 w-full">
        <div className="flex items-center mb-4 lg:mb-0 w-full  lg:w-auto mr-20">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            width={30}
            height={30}
            className="align-middle rounded-full "
          />
          <p className="inline align-middle text-gray-700  ml-2 text-lg">
            {post.author.name}
          </p>
        </div>
        <div className=" flex items-center font-medium text-gray-400">
          <HiOutlineCalendar className="mr-2" />
          <span className="">
            {moment(post.createdAt).format('DD MM, YYYY')}
          </span>
        </div>
      </div>
      <p className="text-lg text-gray-700 font-normal  mb-5">
        {post.excerpt}...
      </p>
    </div>
  );
};

export default PostCard;
