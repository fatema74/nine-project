import { Link } from "react-router-dom";



const Contact = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            'url(https://3jon.com/demo/themeforest/wp/bestmoment/wp-content/uploads/2016/11/first_met.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Gallary us</h1>
            <div className="text-red-400 font-semibold text-xl">
              <Link>Home | Gallary</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 text-center">
        <div className="content font-semibold text-xl hover:text-red-400">
          <Link>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Gallary</li>
            <li>Service</li>
          </Link>
        </div>

        <div className="text-xl font-semibold mt-11">
          <div>
            <span>fatema@gmail.com</span>
          </div>
          <span>01712222222</span>
          <div>
            <span>Engagement Party</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;