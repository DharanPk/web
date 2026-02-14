
import Slider from "../../Components/Cat/Slider"; 
import Product from "../../Components/Cat/Product";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div>
    {/* <Header />
    <Outlet/> */}
    <Slider />
    <Product/>
</div>
    </div>
  );
};

export default Menu;
