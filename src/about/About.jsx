import { useLoaderData } from "react-router-dom";
import Banner from "../pages/banner/Banner";
import AboutMenu from "./AboutMenu";
import AboutDi from "./AboutDi";


const About = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div>
      <Banner></Banner>
      <div>
        <div>
          <h1 className="text-5xl font-bold text-center mt-10">Card Menu</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 content gap-5">
          {datas.map(data => (
            <AboutMenu key={data.id} datas={data}></AboutMenu>
          ))}
        </div>
      </div>
      <div className="content">
        <AboutDi></AboutDi>
      </div>
    </div>
  );
};

export default About;