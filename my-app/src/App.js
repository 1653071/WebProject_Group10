import logo from "./logo.svg";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navigation from "./components/Bars/NavigationBar/Navigation";
import PageRoutes from "./router";
import HomePage from "./container/HomePage/HomePage";
import Listing from "./container/Listing/Listing";
import SinglePage from "./container/SinglePage/SinglePage";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
   
      <Router>
        <Navigation />
        <div className="App">
        <div className="App-body">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/listing" element={<Listing />} />
          <Route exact path="/listing/single" element={<SinglePage />} />
        </Routes>
        </div>
        </div>
        <Footer style={{minHeight:"50px"}}>Footer</Footer>
      </Router>
    
  );
}

export default App;
