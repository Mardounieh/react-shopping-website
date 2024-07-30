import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import NavigationBar from "./components/NavigationBar";
import { ShopContextProvider } from "./context/shopeContext";

function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <ShopContextProvider>
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
