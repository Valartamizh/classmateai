// components/FileUpload.js
import { useState } from 'react';
import { storage } from '../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    const storageRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    setUrl(downloadURL);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>📁 Upload a File to Firebase Storage</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {url && <p>✅ File URL: <a href={url} target="_blank" rel="noreferrer">{url}</a></p>}
    </div>
  );
}
