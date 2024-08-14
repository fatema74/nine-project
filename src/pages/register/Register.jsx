import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const email = form.get('email');
    const photo = form.get('photourl');
    const password = form.get('password');

    console.log(name, email, photo, password);

    createUser(email, password)
      .then(result => {
      console.log(result.user);
      })
      .catch(error => {
        console.error(error);
      }
        )
  };

  return (
    <div className="content">
      <h2 className="text-5xl font-bold text-center mb-20">Please Register</h2>
      <div className="w-7/12 ml-60">
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name :</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Photo URL :</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered"
                required
                name="photourl"
              />
            </div>
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
                <a href="#" className="label-text-alt text-xl link link-hover">
                  Minimum Eight Correct{' '}
                  <span className="text-red-400">Passwords,</span> Please
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-error text-white">Submit</button>
            </div>
            <p className="my-5">
              Already have an account ?{' '}
              <Link className="text-red-400 font-bold text-lg" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;