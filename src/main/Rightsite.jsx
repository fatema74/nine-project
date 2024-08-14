import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Rightsite = () => {
  return (
    <div className="border p-3 rounded">
      {/* part 1 */}
      <h2 className="text-3xl font-bold">Login With</h2>
      <div className="my-4 ">
        <a
          className="flex items-center gap-4 text-xl border border-red-400 text-red-400 p-2 rounded-xl mb-3"
          href="https://www.google.com"
        >
          <FaGoogle></FaGoogle>
          Login With Google
        </a>
        <a
          className="flex items-center gap-4 text-xl border border-black p-2 rounded-xl"
          href="https://www.github.com"
        >
          <FaGithub></FaGithub>
          Login With Github
        </a>
      </div>
      {/* part 2 */}
      <div>
        <h2 className="text-3xl font-bold mt-10">Socil Midea Link</h2>
        <div className="border rounded-s-lg my-4">
          <a
            href="https://www.facebook.com/"
            className="flex items-center gap-3 p-3 text-xl"
          >
            <FaFacebook className="text-green-800"></FaFacebook>
            Facebook
          </a>
          <hr />
          <a
            href="https://twitter.com/"
            className="flex items-center gap-3 p-3 text-xl"
          >
            <FaTwitter className=""></FaTwitter>
            Twitter
          </a>
          <hr />
          <a
            href="https://www.instagram.com/"
            className="flex items-center gap-3 p-3 text-xl"
          >
            <FaInstagram className="text-red-500"></FaInstagram>
            Instagram
          </a>
        </div>
      </div>
      {/* part 3 */}
      <div>
        <h2 className="text-3xl font-bold mt-10 mb-4">Gallery</h2>
        <div className="mb-5">
          <img
            src="https://cdn0.weddingwire.com/article/1779/original/960/jpg/9771-447a2117-51-1059949-160218581137816.webp"
            alt=""
            className="rounded-xl"
          />
          <span className="text-xl">Best Engagement Party photo</span>
        </div>
        <div className="mb-6">
          <img
            src="https://cdn0.weddingwire.com/article/3779/original/960/jpg/9773-shutterstock-592709111.webp"
            alt=""
            className="rounded-xl"
          />
          <span className="text-xl">an engagement party brunch</span>
        </div>
        <div className="mb-6">
          <img
            src="https://wp-media-partyslate.imgix.net/2022/06/photo-7921c88e-84fe-46a8-8674-f155cff8f107-scaled.jpeg?auto=compress%2Cformat&fit=scale&h=841&ixlib=php-3.3.1&w=1260&wpsize=huge"
            alt=""
            className="rounded-xl"
          />
          <span className="text-xl">The Best Engagement Party</span>
        </div>
        <div className="mb-6">
          <img
            src="https://d3emaq2p21aram.cloudfront.net/media/cache/venue_roundup_single_image/uploads/BodeChattanooga-02.jpg"
            alt=""
            className="rounded-xl"
          />
          <span className="text-xl">The Best Engagement</span>
        </div>
      </div>
    </div>
  );
};

export default Rightsite;
