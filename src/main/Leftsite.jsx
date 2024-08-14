import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Leftsite = () => {
  const [catagory, setCatagory] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
    .then(data => setCatagory(data))
  }, [])
  
  return (
    <div className="border rounded p-3">
      <div className="space-y-5">
        <h2 className="text-3xl font-bold">All Category</h2>
        {catagory.map(catagori => (
          <Link className="block ml-4 text-xl font-semibold" key={catagori.id}>
            {catagori.names}
          </Link>
        ))}
      </div>
      <hr />
      {/*  */}
      <div>
        <div className="mt-7">
          <img
            src="https://images.ctfassets.net/77l22z9el0aa/5hHh4BzTMrcEMTF8JcGLD5/60cff28dd9c218fde75dba6d26c5f90c/Inline_stocksy.png?w=635&fm=webp"
            alt=""
            className="rounded"
          />
          <span>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </span>
          <br></br>
          <Link to="/about">
            <button className="btn btn-error mt-4">About Us</button>
          </Link>
        </div>
        <div className="mt-7">
          <img
            src="https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image/uploads/+0Regular_Roundup/2019/1-January/EngagementPartyIdeas/Winery-BrooklynWinery-PatFurey-01.jpg"
            alt=""
            className="rounded"
          />
          <span>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </span>
          <br></br>
          <Link to="/about">
            <button className="btn btn-error mt-4">About Us</button>
          </Link>
        </div>
        <div className="mt-7">
          <img
            src="https://d3emaq2p21aram.cloudfront.net/media/cache/venue_roundup_single_image/uploads/DSCF2864.jpg"
            alt=""
            className="rounded"
          />
          <span>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </span>
          <br></br>
          <Link to="/about">
            <button className="btn btn-error mt-4">About Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Leftsite;