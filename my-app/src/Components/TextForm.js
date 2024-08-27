import React ,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>{
    let newText= text.toUpperCase();
    setText(newText);
  }

  const handleLowClick =()=>{
    let newText= text.toLowerCase();
    setText(newText);
  }

  const handleSampleClick =()=>{
    // let newText= text.toLowerCase();
    setText("This is a Sample Text!");
  }

  const handleResetClick =()=>{
    // let newText= text.toLowerCase();
    setText("");
  }

  const handleOnChange =(event)=>{
    setText(event.target.value);
  }

  const [text, setText]= useState('Enter Text here');

  return (
    <>
    <div className='container'>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower case</button>
        <button className="btn btn-primary mx-2" onClick={handleSampleClick}>Sample Text</button>
        <button className="btn btn-primary mx-2" onClick={handleResetClick}>Reset</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      {/* <p>{text.split{" "}.length} words and {text.length} charecters</p> */}
      <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text} </p>
    </div>
    </>
  )
}

