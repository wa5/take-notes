# take-notes

# Notes
* Intro: hear you get notes of all differnt technologies like html,css,js,ts,java etc, from diffent teachers and with diffent explaination and also u can be a part of it by creating your known notes.

# Step to be follow:
* Install take-notes by using following comand
 ```bash
  npm i take-notes
```
* After the Installation check in the package.json file wither it
is installed or not.
 ```bash
 "take-notes": "^1.0.1",
  ```
* Working Example with React.JS is as follows:
 ```bash
 import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import base64 from 'base64-encode-file'

function App() {
let [img,setImg]=useState()
let handleChange=async(e)=>{
  let data=await base64(e.target.files[0])
  console.log(data)
}
  return <>
  <h1>testing the  base64-encode-file</h1>
  <input type="file" name="img" onChange={handleChange}/>
  </>
}

export default App;
```
* Working Example with React.TS is as follows:

```bash
import React from 'react';
import logo from './logo.svg';
import './App.css';
import base64 from 'base64-encode-file'

function App() {
 
  let handleChange=async(e:any)=>{
    console.log( await base64(e.target.files[0]))
 
  }
  return (
    <>
    <input type="file" name="" onChange={handleChange} />
    </>
  );
}

export default App;

```


