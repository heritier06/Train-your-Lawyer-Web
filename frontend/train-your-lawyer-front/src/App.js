 import {
  BrowserRouter,
  Route,
  Routes,
 } from "react-router-dom";

import Login from "./Login.js"
import Register from "./Register.js";
import Register2 from "./Register2.js";
import Success from "./Success.js"
function App() {
  return (
      <>
      <BrowserRouter>
        <div className="App">
          <Login />
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Register2" element={<Register2 />} />
                <Route path="/Success" element={<Success />} />
            </Routes>
        </div>
      </BrowserRouter>
      </>
  );
}

export default App;