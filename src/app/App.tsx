import * as React from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import Wallet from "../Pages/Wallet";
import {useEffect} from "react";
// @ts-ignore
const tg = window.Telegram.WebApp;


function App() {

    useEffect(()=>{
        tg.ready();
    },[])

    const onClose= ()=>{
        tg.close();
    }

  return (
      <HashRouter> <button
          aria-label="Close menu"
          className="h-16 w-16  absolute top-0.5 right-0.5"
          type="button"
          onClick={()=>onClose()}
      >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
              />
          </svg>
      </button>
            <Routes>

                <Route  path="/" element={<Wallet/>}/>
                <Route  path="send" element={<div>send</div>}/>
                <Route  path="/receive" element={<div>receive</div>}/>
            </Routes>

      </HashRouter>
  );
}

export default App;
