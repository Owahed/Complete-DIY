import React, { useState } from "react";
import * as MaterialUI from "@material-ui/core";
import ContentEditable from "react-contenteditable";

const useStyles = MaterialUI.makeStyles((theme) => {
  return {
    text: {
      outline: "none",
      display: "inline-block",
      fontSize: (props) => props.fontSize,
      fontFamily: (props) => props.fontFamily,
      fontWeight: (props) => props.fontWeight,
      fontStyle: (props) => props.fontStyle,
      textDecoration: (props) => props.textDecoration,
      textAlign: (props) => props.textAlign,
      color: (props) => props.color,
      cursor: "text",
      border: "none",
      resize: "none",
      background: "transparent",
    },
  };
});

const BaseText = React.forwardRef((props, ref) => {
  const { textData, className, onClick, edit } = props;
  const classes = useStyles(textData);

  const [stateTwo, setStateTwo] = useState({
    html: `${textData.text}`,
    editable: true,
  });
  const handleChange = (evt) => {
    setStateTwo({ html: evt.target.value, editable: true });
  };
  console.log("fontSize", props.fontSize);
  return (
    // <span
    //   ref={ref}
    //   id="text-draggable"
    //   onClick={onClick}
    //   className={`${textData.id} ${classes.text} ${className || ""}`}
    //   contentEditable={edit}
    //   suppressContentEditableWarning={true}
    // >
    //   {textData.text}
    // </span>
    <ContentEditable
      className={`editable`}
      tagName="pre"
      html={stateTwo.html} // innerHTML of the editable div
      // disabled={!stateTwo.editable} // use true to disable edition
      onChange={handleChange} // handle innerHTML change
      // onBlur={sanitize}
      // innerRef={(elt) => setRaf((innerRef.current = elt))}
      ref={ref}
      id="text-draggable"
      onClick={onClick}
      className={`${textData.id} ${classes.text} ${className || ""}`}
      contentEditable={edit}
      suppressContentEditableWarning={true}
    />
  );
});

export default BaseText;
