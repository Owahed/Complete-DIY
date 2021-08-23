import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import "./Test.css";

const Test = () => {
  const [state, setState] = useState({
    html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
    editable: true,
  });

  const handleChange = (evt) => {
    setState({ html: evt.target.value });
  };

  const sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] },
  };

  const sanitize = () => {
    setState({ html: sanitizeHtml(state.html, sanitizeConf) });
  };

  const toggleEditable = () => {
    setState({ editable: state.editable });
  };
  return (
    <div>
      <h3>editable contents</h3>
      <ContentEditable
        className="editable"
        tagName="pre"
        html={state.html} // innerHTML of the editable div
        disabled={!state.editable} // use true to disable edition
        onChange={handleChange} // handle innerHTML change
        onBlur={sanitize}
      />
      <h3>source</h3>
      {/* <textarea
        className="editable"
        value={state.html}
        onChange={handleChange}
        onBlur={sanitize}
      /> */}
      <h3>actions</h3>
      {/* <EditButton cmd="italic" /> */}
      {/* <EditButton cmd="bold" />
      <EditButton cmd="formatBlock" arg="h1" name="heading" />
      <EditButton
        cmd="createLink"
        arg="https://github.com/lovasoa/react-contenteditable"
        name="hyperlink"
      />
      <button onClick={toggleEditable}>
        Make {state.editable ? "readonly" : "editable"}
      </button> */}
    </div>
  );
};

// function EditButton(props) {
//   return (
//     <button
//       key={props.cmd}
//       onMouseDown={(evt) => {
//         evt.preventDefault(); // Avoids loosing focus from the editable area
//         document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
//       }}
//     >
//       {props.name || props.cmd}
//     </button>
//   );
// }
export default Test;
