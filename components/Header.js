import Link from 'next/link';

const Header = () => {
  return (
    <div className="container mx-auto px-20 mb-8">
      <div className="border-b w-full inline-block border-gray-300 py-5">
        <div className="md: float-left block">
          <Link href="/">
            <span className="cursor-pointer font-black text-4xl text-gray-900">
              K-TECH
            </span>
          </Link>
        </div>
        {/* <div className="hidden md:float-left md:contents">
          <span className="md:float-right mt-2 align-middle text-gray-900 ml-20 font-semibold cursor-pointer">
            React
          </span>
          <span className="md:float-right mt-2 align-middle text-gray-900 ml-20 font-semibold cursor-pointer">
            Web development
          </span>
          <span className="md:float-right mt-2 align-middle text-gray-900 ml-20 font-semibold cursor-pointer">
            App development
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
