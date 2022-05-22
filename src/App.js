import "./App.css";
import Market from "./component/Market";
import MainNavigation from "./Navigation/MainNavigation";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home/Home";
function App() {
  return (
    <>
      <MainNavigation />
      <Router>
        <Routes>
          <Route path="/market" element={<Market />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
