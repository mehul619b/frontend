import './App.css';
import React,{useState} from 'react';
import axios from 'axios'

function App() {
  const [inputFile,setinputFile]=useState(null);
  const [receivedFileName,setreceivedFileName]=useState("");
  const postFile=async (e)=>{
    e.preventDefault();
    const data=new FormData();
    data.append('file',inputFile);

    const res=await axios.post('https://inspekt-assignment.herokuapp.com/save',data);
    setreceivedFileName(res.data);
  }
  const postUrl="https://inspekt-assignment.herokuapp.com/save";
   return (
    <div className="App">
      <div className="container">
        <form>
          <input type="file" onChange={(e)=>(setinputFile(e.target.files[0]))}/>
          <button onClick={postFile} type="submit">Submit</button>
        </form>
        <br/>
        <label>FILENAME: {receivedFileName}</label>
      </div>
    </div>
  );
}

export default App;
