

import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://cdn0.weddingwire.com/article/7879/3_2/960/jpg/9787-abp-3681edited-51-994777-160315415529035.jpeg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-slate-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-semibold text-black italic">
              Our <span className="font-bold text-red-500">Love Story</span>
            </h1>
          
            <p className="mb-5 text-black">
              There are many variations of passages of Lorem Ipsum available
              There are many variations of passages of Lorem Ipsum available
              There are many variations of passages of Lorem Ipsum available
            </p>
            <Link to="/about">
              <button className="btn btn-error">About Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;