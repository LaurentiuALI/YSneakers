import "./App.css";
import Home from "./components/home/home";
import Products from "./components/products/products";
import Account from "./components/account/account";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
