import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-sm rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <h1 className="text-lg block mt-3 mb-3 to-gray-700 cursor-pointer hover:text-pink-600 transition duration-300">
            {category.name}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
