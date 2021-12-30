import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Dashboard from "./container/Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/*" element={<Dashboard />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
