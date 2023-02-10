import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Employees from "./pages/Employees";
import VendorList from "./components/vendorList";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="/employees" element={<Employees/>} />
        </Routes>
      </Router>
      <VendorList />
    </div>
  );
}

export default App;

//test