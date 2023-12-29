function App() {

    return (
        <>
            <div className=" w-full h-20 font-mono flex justify-between bg-slate-300 absolute top-0 shadow-xl ">
                <div className="w-1/6 pl-20 flex justify-center items-center">
                    <h1 className="text-4xl text-blue-600">Routrek</h1>
                </div>
                <div className=" w-2/6 flex justify-start items-center">
                    <h1 className="text-2xl">Muhammad Hammad</h1>
                </div>
                <div className=" w-4/12 flex justify-around items-center mx-4 ">
                    <h1 className="text-xl">Notifications</h1>
                    <h1 className="text-xl">Profile</h1>
                    <button className=" text-lg font-semibold border-none outline-none cursor-pointer transition delay-75 ease-in-out  hover:bg-blue-500 hover:text-white">Logout</button>
                </div>
            </div>

        </>
    )
}

export default App
