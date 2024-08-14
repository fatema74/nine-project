
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Home/Navber';
import Footer from '../pages/Home/Footer';

const Root = () => {
  return (
    <div>
      <div>
        <Navber></Navber>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
      
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;