import "./App.css";
import Main from "./Main/main";
import Header from "./Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Destinations from "./Destinations/Destinations";
import Crew from "./Crew/Crew";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/destinations" element={<Destinations />} />4
        <Route path="/crew" element={<Crew />} />
      </Routes>
    </div>
  );
}

export default App;
