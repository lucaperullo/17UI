import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import PostProduct from "./Pages/PostProduct";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route caseSensitive path="/" element={<Home />} />
        <Route path="shop" element={<AllProducts />} />
        <Route path="my-store" element={<PostProduct />} />
      </Routes>

      {/* < /> */}
      {/* <PostProduct /> */}
    </div>
  );
}

export default App;
