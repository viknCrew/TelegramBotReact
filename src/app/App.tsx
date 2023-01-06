import * as React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Wallet from "../Pages/Wallet";



function App() {

  return (
      <BrowserRouter>
            <Routes>
                  <Route  path="/wallet" element={<Wallet/>}/>
            </Routes>
      </BrowserRouter>
  );
}

export default App;
