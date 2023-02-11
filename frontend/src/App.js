import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Employees from "./employee";
import Company from './company'
import VendorList from "./components/vendorList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/employees" element={<Employees/>} />
          <Route path="/companies" element={<Company/>} />
          <Route path="/vendors" element={<VendorList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
