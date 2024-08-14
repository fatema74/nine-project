import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in the login page', location);

  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');

    const password = form.get('password');

    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user);
        
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="content">
      <h2 className="text-5xl font-bold text-center mb-20">Please Login</h2>
      <div className="w-7/12 ml-60">
        <div className="">
          <div className="card  w-full shadow-2xl bg-base-100">
            <form onClick={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Email :</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Password :</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-xl link link-hover"
                  >
                    Forgot <span className="text-red-400">password?</span>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-error text-white">Login</button>
              </div>
              <p className="my-5">
                Do not have an account <Link className="text-red-400 font-bold text-lg" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;