function Signup(){
    return (
      <>
      <div className="bg-[#756CFB] w-screen h-screen pt-20  font-serif flex justify-evenly">
      <form className="w-1/3 h-max rounded-md bg-white p-2">
        <div className="flex justify-center">
         <p className="text-4xl m-2 font-medium">Sign Up</p>
        </div>
        <div className="text-xl p-2">
          <input type="text" placeholder="First Name" className="w-5/12 m-2 p-1 outline-none border-0 border-b-2 border-slate-400 " required/>
          <input type="text" placeholder="Last Name" className="w-48 ml-3 p-1 outline-none border-0 border-b-2 border-slate-400" required/>
          <input type="email" placeholder="abc@gmail.com" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required/>
          <select className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required>
            <option >Select Your Role</option>
            <option>Customer</option>
            <option>Vendor</option>
          </select>
          <input type="password" placeholder="Password" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required />
          <input type="password" placeholder="Confirm Password" className="w-96 m-2 p-1 outline-none border-0 border-b-2 border-slate-400" required />
          <p className="m-2 text-base md:hover:cursor-pointer" >Already have an account? Login</p>
          
        </div>
        <div className="flex justify-center">
          <button className="bg-[#756CFB] p-2 font-medium border-none outline-none w-56 text-white text-xl md:hover:outline-none" >Create Account</button>
        </div>
      </form>

    </div>
      </>
    )
  }


  export default Signup
