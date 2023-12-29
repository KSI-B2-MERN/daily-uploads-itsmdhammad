import { useState } from "react"
import Login from "../components/auth/login"
import SignUp from "../components/auth/Signup"

function App() {

    const [state, setState] = useState(false);

    const updateState = (newstate) => {
        setState(newstate);
    }

    return (
        <>
            {!state && <Login updateState={updateState} />}
            {state && <SignUp updateState={updateState} />}
        </>
    )
}

export default App
