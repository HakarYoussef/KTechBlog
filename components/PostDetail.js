import { HiOutlineCalendar } from 'react-icons/hi';
import moment from 'moment';
import { Fragment } from 'react';
import Image from 'next/image';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 className="text-xl font-semibold mb-4" key={index}>
            {modifiedText.map((item, itemId) => (
              <Fragment key={itemId}>{item}</Fragment>
            ))}
          </h3>
        );

      case 'paragraph':
        return (
          <p className="mb-8" key={index}>
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </p>
        );

      case 'block-quote':
        return (
          <div className="border-l-8">
            {' '}
            <p className="mb-8 ml-5 text-gray-500" key={index}>
              {modifiedText.map((item, i) => (
                <Fragment key={i}>{item}</Fragment>
              ))}
            </p>
          </div>
        );

      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          >
            {modifiedText.map((item, i) => (
              <Fragment key={i}>{item}</Fragment>
            ))}
          </img>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg lg:p-8 mb-8">
      <div className="relative overflow-hidden shadow-sm mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0 ">
        <div className="flex items-center  w-full">
          <div className="flex items-center mb-5 lg:mb-0  lg:w-auto mr-8">
            <Image
              src={post.author.photo.url}
              alt={post.author.name}
              height={30}
              width={30}
              className="rounded-full align-middle "
            />
            <p className="inline align-middle to-gray-700 ml-2 text-md">
              {post.author.name}
            </p>
          </div>
          <div className=" flex items-center  font-medium text-gray-400">
            <HiOutlineCalendar className="mr-2" />
            <span className="">
              {moment(post.createdAt).format('DD MM, YYYY')}
            </span>
          </div>
        </div>
        <h1 className="mb-8 mt-8 text-3xl font-semibold ">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
