import { useLoaderData } from "react-router-dom";
import Card from "../../main/Card";
import Leftsite from "../../main/Leftsite";
import Rightsite from "../../main/Rightsite";
import Banner from "../banner/Banner";


const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 content mt-16">
        <div>
          <Leftsite></Leftsite>
        </div>
        <div className="col-span-2">
          {
            data.map(mNews => <Card key={mNews.id} data={mNews}></Card>)
          }
          
        </div>
        <div>
          <Rightsite></Rightsite>
        </div>
      </div>
    </div>
  );
};

export default Home;