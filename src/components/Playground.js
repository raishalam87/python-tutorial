import React, { useState, useEffect } from "react";
import axios from "axios";

function Playground({ exampleCode = "print('Hello, World!')" }) {
  const [code, setCode] = useState(exampleCode);
  const [output, setOutput] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    setCode(exampleCode);
  }, [exampleCode]);

  const runPython = async () => {
    setOutput("Running...");

    try {
      const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: "python3",
        version: "3.10.0",
        files: [
          {
            name: "main.py",
            content: code,
          },
        ],
      });

      if (response.data && response.data.run && response.data.run.output) {
        setOutput(response.data.run.output);
      } else {
        setOutput("No output received.");
      }
    } catch (error) {
      setOutput("Error running code: " + error.message);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch (err) {
      setCopyStatus("Clipboard access blocked");
      setTimeout(() => setCopyStatus(""), 3000);
    }
  };

  return (
    <div className="playground">
      <h3>Example Playground</h3>
      <textarea
        rows="8"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <div className="playground-actions">
        <button onClick={runPython}>Run</button>
        <button onClick={copyToClipboard}>Copy</button>
        {copyStatus && <span className="copy-status">{copyStatus}</span>}
      </div>
      <pre className="output-box">{output}</pre>
    </div>
  );
}

export default Playground;
