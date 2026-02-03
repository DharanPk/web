import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Lay/Layout";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
