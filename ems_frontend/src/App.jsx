import "./App.css";
import EmployeeComponent from "./components/EmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployee from "./components/ListEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
      <HeaderComponent />
      <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-employee" element={<EmployeeComponent />} />
          <Route path="/update-employee/:id" element={<EmployeeComponent />} />
        
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
