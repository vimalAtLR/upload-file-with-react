import React, { useState } from 'react'

function App() {
    const [file, setFile] = useState();

    function handleFile(e) {
        setFile(e.target.files[0])
    }

    async function handleUpload() {
        try {
            const formData = new FormData();
            formData.append("file", file)

            // send file to server by calling api
            let response = await fetch("url", {
                method: "POST",
                body: formData,
            });
            response = await response.json();
            console.log("response :: ", response);
            
        } catch (err) {
            console.log('err : ', err);
        }
    }

    return (
        <div style={{margin: "100px"}}>
            <h1>This demo is created for upload file using react.</h1>
            <div>
                <input type="file" name="file" id="upload" onChange={handleFile}/>
                <button type="submit" onClick={handleUpload}>Upload</button>
            </div>
        </div>
    )
}

export default App
