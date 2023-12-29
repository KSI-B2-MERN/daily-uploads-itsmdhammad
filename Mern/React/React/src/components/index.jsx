import axios from 'axios'

function App() {

    const handleUpload = () => {
        // console.log("Handle Upload");
        axios.post('http://localhost:4000/image-upload', {
            value: 'This is my awesome test value!'
        })
    }


    return (
        <>
            <div className="w-screen h-screen gap-5 flex justify-center items-center">
                <input type="file" className="border-2 border-blue-600 text-2xl " />
                <button className="bg-blue-500 text-white"
                    onClick={handleUpload}
                >Add Image</button>
            </div>
        </>
    )
}

export default App
