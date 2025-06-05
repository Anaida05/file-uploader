import React, { useState } from 'react'
import axios from "axios"
import "./App.css"
const App = () => {
  const CLOUD_NAME = "dmmy4z3fc"
  const UPLOAD_PRESET = "unsigned_preset"
  const [file, setFile] = useState([])
  const [imageURL,setImageURL] = useState("")
  const handleUpload = (e) => {
    setFile(e?.target?.files[0])
    console.log('e.target', e.target.files)
  }

  const uploadToCloudinary=async(e)=>{
    e.preventDefault();
    if(!file){
      alert("Please select a file!!!")
      return
    }

    const formData = new FormData();
    formData.append("file",file);
    formData.append("upload_preset", UPLOAD_PRESET);


    try{
      const response = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,formData,{
        headers : {
          "Content-type" : "multipart/form-data"
        }}
      )
       setImageURL(response.data.secure_url);
      console.log('response.data', response.data)
    }catch(error){
      console.log("Failed",error)
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Files</h2>
      <input type="file" multiple onChange={handleUpload}/>
      <button onClick={uploadToCloudinary}>Upload</button>

      {
        imageURL && (
          <div>
            <h3>Image Uploaded</h3>
            <img src={imageURL} alt="Uploaded" style={{ width: "200px" }}/>
          </div>
        )
      }
    </div>
  )
}

export default App