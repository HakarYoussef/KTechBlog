import Image from 'next/image';
import React from 'react';

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-5">
      <div className="absolute left-0 right-0 -top-12">
        <Image
          unoptimized
          alt={author.name}
          height={90}
          width={90}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-gray-700 my-2 text-lg font-bold">{author.name}</h3>
      <p className="text-gray-700 text-md">{author.bio}</p>
    </div>
  );
};

export default Author;
