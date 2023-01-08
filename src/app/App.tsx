import * as React from "react";
import {useTelegram} from "../hooks/useTelegram";
import {useEffect} from "react";
import {redirect} from "react-router-dom";

function App() {
    const {onToggleButton, tg,onClose} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])


    return redirect("/")
}

export default App;
