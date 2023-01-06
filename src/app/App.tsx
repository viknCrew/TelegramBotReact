import * as React from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import Wallet from "../Pages/Wallet";



function App() {

  return (
      <HashRouter>
            <Routes>
                  <Route  path="/" element={<Wallet/>}/>
                <Route  path="send" element={<div>send</div>}/>
                <Route  path="/receive" element={<div>receive</div>}/>
            </Routes>
      </HashRouter>
  );
}

export default App;
