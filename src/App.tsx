import "./App.css";
import Main from "./Main/main";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destinations from "./Destinations/Destinations";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </div>
  );
}

export default App;
