import React,{useState} from 'react'

const TextForm = (props) => {
    const [text, setText] = useState('')

    const handleUpClick = () => {
        const newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleClearClick = () => {
        const newText= '';
        setText(newText)
        props.showAlert("Cleared!","success");
    }

    const handleLoClick = () => {
        const newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }

    const handleCopy = () => {
        console.log("I am copy");
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleExtraSpaces = () => {
        var newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    };
    


    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
        <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h1>{props.heading}</h1>
           <div className="mb-3">
            <textarea id="myBox" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} rows="6"></textarea>
           </div>
           <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
           <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
           <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button>
           <button className="btn btn-primary mx-2" onClick={handleCopy} >CopyText</button>
           <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Extra Space Remover</button>
        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

        </div>
        </>
    )
}

export default TextForm