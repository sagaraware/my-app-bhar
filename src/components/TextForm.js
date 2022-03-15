import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Clear text", "success");
    }

    const handleOnChange = (event) => {
        // console.log("handle chnage");
        setText(event.target.value)
    }
    const copyText = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied", "success");
    }
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <>
            <div className='container' style={{color: props.mode === "dark"?"white":"black"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark"?"grey":"white", color: props.mode === "dark"?"white":"black"}} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
                <button className='btn btn-primary mx-1' onClick={copyText}>Copy text</button>
                <button className='btn btn-primary mx-1' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3' style={{color: props.mode === "dark"?"white":"black"}}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something here to preview."}</p>
            </div>
        </>
    )
}
