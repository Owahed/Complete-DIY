import React from "react";
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

class TextClass extends React.Component {
  constructor() {
    super();
    this.state = {
      html: `<p>Hello World !</p><p>Paragraph 2</p>`,
      editable: true,
    };
  }
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };

  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h4", "h5", "h6", "u"],
    allowedAttributes: { a: ["href"] },
  };

  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, this.sanitizeConf) });
  };

  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };
  render() {
    return (
      <div>
        {/* <h3>editable contents</h3> */}
        <ContentEditable
          style={{
            color: `${this.props.textColor}`,
            fontFamily: `${this.props.fontName}`,
            fontSize: `${this.props.fontSizeName}px`,
          }}
          className={`editable ${this.props.currentRadioFormatValue}`}
          tagName="pre"
          html={this.state.html} // innerHTML of the editable div
          disabled={!this.state.editable} // use true to disable edition
          onChange={this.handleChange} // handle innerHTML change
          onBlur={this.sanitize}
        />
        {/* <h3>source</h3>
        <textarea
          className="editable"
          value={this.state.html}
          onChange={this.handleChange}
          onBlur={this.sanitize}
        /> */}
        {/* <h3>actions</h3>
        <EditButton cmd="italic" />
        <EditButton cmd="bold" />
        <EditButton cmd="underline" />
        <EditButton cmd="formatBlock" arg="h1" name="heading" />
        <EditButton
          cmd="createLink"
          arg="https://github.com/lovasoa/react-contenteditable"
          name="hyperlink"
        />
        <button onClick={this.toggleEditable}>
          Make {this.state.editable ? "readonly" : "editable"}
        </button> */}
      </div>
    );
  }
}

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

export default TextClass;
