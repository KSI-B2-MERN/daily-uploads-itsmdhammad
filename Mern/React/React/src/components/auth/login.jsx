import { useState } from "react"

function Login(UpdateState) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <>
      <div className="bg-[#756CFB] w-screen h-screen pt-20  font-serif flex justify-evenly">
        <form className="w-1/3 h-max rounded-md bg-white p-2">
          <div className="flex justify-center">
            <p className="text-4xl m-2 font-medium">Login</p>
          </div>
          <div className="text-xl p-2">
            <input type="email" placeholder="abc@gmail.com" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400"
              onChange={(e) => {
                setEmail(e.target.value);
              }} />
            <input type="password" placeholder="Password" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400"
              onChange={(e) => {
                setPassword(e.target.value);
              }} />
            <p className="m-2 text-base"
              onClick={() => UpdateState.updateState(true)}
            >Don't have an account? Register YourSelf!</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#756CFB] p-2 font-medium border-none outline-none w-56 text-white text-xl md:hover:outline-none disabled:bg-slate-300"
              disabled={!(email, password)}
            >Login</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Login
