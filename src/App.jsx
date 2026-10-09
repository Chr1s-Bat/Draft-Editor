import React, { useState, useEffect, useRef } from "react";
import './App.css';

export default function App() {
    const [text, setText] = useState("");

    // Ref for accessing the input DOM element directly
    const inputRef = useRef(null);

    // Ref for tracking render counts without causing re-renders
    const renderCount = useRef(0);

    // TODO 1: Use useEffect to automatically focus the input when the component first mounts.
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); // Empty array ensures it runs only once on mount

    // TODO 3: Increment renderCount.current by 1 directly in the component body (NOT inside useEffect).
    renderCount.current += 1;

    // TODO 2: Use useEffect to log "Draft saved: " + text to the console every time the text changes.
    useEffect(() => {
        console.log("Draft saved: " + text);
    }, [text]); // Triggers only when 'text' updates

    return ( <
        div style = {
            { padding: "20px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" } } >
        <
        h2 > Draft Editor Activity < /h2>

        <
        textarea ref = { inputRef }
        value = { text }
        onChange = {
            (e) => setText(e.target.value) }
        placeholder = "Type your draft here..."
        rows = { 6 }
        style = {
            { width: "100%", padding: "10px", fontSize: "16px", marginBottom: "15px" } }
        />

        <
        p > < strong > Character Count: < /strong> {text.length}</p >

        { /* TODO 4: Display renderCount.current on the screen below this comment. */ } <
        p > < strong > Component Renders: < /strong> {renderCount.current}</p >
        <
        /div>
    );
}

/* 
  TODO 6: Written Explanation
  Explanation: The displayed renderCount does not update live on the screen even 
  though the ref value is increasing correctly in the background because modifying 
  a ref's .current property mutates data container values directly without triggering 
  a component re-render. React only re-evaluates and repaints components when state 
  changes occur, meaning the UI bound to a ref will not visually refresh until an 
  actual state-driven re-render happens.
*/