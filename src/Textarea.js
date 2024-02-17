import React, { useState } from 'react';

export default function Textarea(props) {
  const [text, setText] = useState('Enter text here');
  const [isBold, setIsBold] = useState(false);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClwClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Your text area is blank", "success");
  };

  const handleChangeClick = (event) => {
    console.log("Textarea content changed:", event.target.value);
    setText(event.target.value);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
    props.showAlert("Converted to Bold Text", "success");
  };

  const handleCopyClick = () => {
    var textArea = document.getElementById('myBox');
    textArea.select();
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success");
  };

  return (
    <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black', }}>
      <h1 className='my-4'>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="8"
          style={{
            fontWeight: isBold ? 'bold' : 'normal',
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black',
          }}
          onChange={handleChangeClick}
        ></textarea>
        <button type="button" disabled={text.length ===0} className="btn btn-primary my-3 my-1" onClick={handleUpClick}>
          Convert text to Uppercase
        </button>
        <button type="button" disabled={text.length ===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleLowClick}>
          Convert text to lowercase
        </button>
        <button type="button" disabled={text.length ===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleClwClick}>
          Clear text
        </button>
        <button type="button" disabled={text.length ===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleBoldClick}>
          {isBold ? 'Unbold Text' : 'Bold Text'}
        </button>
        {/* Commented the unused function to suppress the warning */}
        {/* eslint-disable-next-line no-unused-vars */}
        <button type="button" disabled={text.length ===0} className="btn btn-primary my-3 mx-2 my-1" onClick={handleCopyClick} >
          Copy text
        </button> 
        <h1>Your text Summary</h1>
        <p>{text.split(" ").filter ((element) => {return element.length!==0}).length} Words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").filter ((element) => {return element.length!==0}).length} Minutes Read </p>
        <h2>Preview</h2>
        <p>{text.trim().length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </div>
  );
}
