import { Link } from "react-router-dom";

const AboutMenu = ({ datas }) => {
  const { title, image, paragrap, id, price, detel, brand_name } = datas;
  // console.log(datas);
  return (
    <div>
      
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <p>{paragrap}</p>
          <span className="text-red-300">{detel}</span>
          <div className="flex gap-10 font-semibold text-lg text-red-300">
            <span>{price}</span>
            <span>{brand_name}</span>
          </div>
          <div className="card-actions">
            <Link to="/contact">
              <button className="btn bg-red-400 text-white">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMenu;