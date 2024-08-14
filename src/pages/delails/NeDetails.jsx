import { useLoaderData, useParams } from "react-router-dom";
import Rightsite from "../../main/Rightsite";


const NeDetails = () => {
  const { id } = useParams();
  const res = useLoaderData();
  const singleRes = res.find((item) => item.id == id);
  // console.log(singleRes);

  const { title, image, paragrap, scath, brand_name, price, detel } = singleRes;
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 content gap-10">
      <div className="col-span-3">
        <div className="card bg-base-100 shadow-xl mb-10">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{title}</h2>
            <span>{scath}</span>
            <span>{detel}</span>
            <p>{paragrap}</p>
            <div className="flex justify-between text-xl text-red-400">
              <span>{brand_name}</span>
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Rightsite></Rightsite>
      </div>
    </div>
  );
};

export default NeDetails;