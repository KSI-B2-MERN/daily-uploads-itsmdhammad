function App() {

    return (
        <>
            <div className=" w-72 h-screen font-mono bg-slate-300 pt-24 flex items-end justify-end shadow-xl">
                <div className="w-64 text-[#7E30E1] h-full  flex flex-col gap-1">
                    <div className="py-2 px-6 rounded-s-full hover:bg-blue-600 hover:text-white cursor-pointer transition delay-75 ease-in-out">
                        <h1 className="text-2xl">Add a Product</h1>
                    </div>
                    <div className="py-2 px-6 rounded-s-full hover:bg-blue-600 hover:text-white cursor-pointer transition delay-75 ease-in-out">
                        <h1 className="text-2xl">Inventory</h1>
                    </div>
                    <div className="py-2 px-6 rounded-s-full hover:bg-blue-600 hover:text-white cursor-pointer transition delay-75 ease-in-out">
                        <h1 className="text-2xl">Orders</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
