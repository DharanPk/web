import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Lay/Layout";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Login from "./Pages/Login/Login";
import About from "./Pages/About";
import Cart from "./Pages/Cart/Cart";
import ProtectedRoute from "./Pages/Menu/ProtectdRoute";
import Checkout from "./Pages/Checkout/Checkout";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
         <Route path="/" element={<Home />} />
         <Route path="/menu"element={<ProtectedRoute><Menu /></ProtectedRoute>}/>
         <Route path="/cart"element={<ProtectedRoute><Cart />  </ProtectedRoute>}/>
         <Route path="/checkout"element={<ProtectedRoute><Checkout />  </ProtectedRoute>}/>
         <Route path="/orders"element={<ProtectedRoute><Order />  </ProtectedRoute>}/>
        <Route path="/about"element={<ProtectedRoute><About />  </ProtectedRoute>}/>
        <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
