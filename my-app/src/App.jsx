import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [file, setFile] = useState()
  const handleUpload = (e) => {
    setFile(e?.target?.files[0])
    console.log('e.target', e.target.files)
  }

  return (
    <div>
      <form >
        <h2>File Uploader</h2>
        <input type="file" onChange={handleUpload} />
        <button type='submit'>Upload</button>
      </form>
    </div>
  )
}

export default App