import * as React from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import Wallet from "../Pages/Wallet";



function App() {

  return (
      <HashRouter>
            <Routes>
                  <Route  path="/" element={<Wallet/>}/>
            </Routes>
      </HashRouter>
  );
}

export default App;
