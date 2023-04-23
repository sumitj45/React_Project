
import "./App.css";
import Login from "./components/Login/Login"
import Dashboard from "./components/Dashboard";
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
   



    {/* Routing Part */}
    <Routes>
        <Route
          path="/"
          element={<Login  />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard/>}
        />
      </Routes>

  </>
  );
}

export default App;