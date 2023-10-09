import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ContextAPI from "./components/ContextAPI";

function App() {
  return (
    <ContextAPI>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ContextAPI>
  );
}

export default App;
