import { Link } from "react-router-dom";



const Card = ({ data }) => {
  const { title, image, paragrap, id } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="card bg-base-100 shadow-xl mb-10">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>

          <p>{paragrap}</p>
          <div className="card-actions justify-end">
            <Link to={`/data/${id}`}>
              <button className="btn bg-red-400 text-white">Red More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl mb-10">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{title}</h2>

          <p>{paragrap}</p>
          <div className="card-actions justify-end">
            <Link to={`/data/${id}`}>
              <button className="btn bg-red-400 text-white">Red More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;