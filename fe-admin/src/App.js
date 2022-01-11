import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link, Routes,useLocation,Navigate } from "react-router-dom";
import Dashboard from "./container/Dashboard/Dashboard";
import Login from "./container/Login/Login"
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        
        <Route path="/login" element={<Login/>} />
        <Route exact path="/*" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} />
      </Routes>
      </Router>
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();

  if (!localStorage.accessToken) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
export default App;
