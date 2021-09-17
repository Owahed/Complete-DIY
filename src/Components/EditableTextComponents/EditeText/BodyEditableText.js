import React, { useContext, useEffect } from "react";
import BaseText from "../basetext";
import Border from "../border";
import TextControls from "../textcontrols";
import * as MaterialUI from "@material-ui/core";
import { UserContext } from "../../../App";
import TextControlsBody from "../TextControlsBody";

const translate = (x, y) => {
  return `translate(${x}px, ${y}px)`;
};

const useStyles = MaterialUI.makeStyles((theme) => {
  return {
    text: {
      position: "absolute",
      transform: (props) => translate(props.x, props.y),
    },
  };
});

const BodyEditableText = React.forwardRef((props, ref) => {
  const { textData, onUpdate, disEnableHeaderText } = props;
  if (typeof textData.id === "undefined") {
    throw Error(
      "Text id is required. Please add a Text id i.e { id: unique-id, ...}"
    );
  }
  const [edit, setEdit] = React.useState(false);
  const [event, setEvent] = React.useState({
    x: 0,
    y: 0,
    originalX: 0,
    originalY: 0,
    status: "mouse-up",
  });
  const [theTextDataTwo, setTextDataTwo] = React.useState({
    id: textData.id,
    x: textData.x || 0,
    y: textData.y || 0,
    fontSize: textData.fontSize || 14,
    fontFamily: textData.fontFamily || "sans-serif",
    fontWeight: textData.fontWeight || "normal",
    fontStyle: textData.fontStyle || "normal",
    textDecoration: textData.textDecoration || "none",
    textAlign: textData.textAlign || "start",
    text: textData.text || `Default Body Text one`,
    color: textData.color || "black",
    tag: "03",
  });
  const classes = useStyles(theTextDataTwo);

  const textRef = React.useRef();
  const borderRef = React.useRef();

  // ----------------
  // const [textFieldData, setTextFieldData] = useContext(UserContext);
  // useEffect(() => {
  //   console.log("theTextDataTwo", theTextDataTwo);
  //   setTextFieldData(theTextDataTwo);
  // }, [theTextDataTwo]);

  React.useEffect(() => {
    const onMouseDown = (e) => {
      if (e.target === borderRef.current && event.status === "mouse-up") {
        setEvent({
          x: e.clientX,
          y: e.clientY,
          originalX: theTextDataTwo.x,
          originalY: theTextDataTwo.y,
          status: "mouse-down",
        });
      }
    };
    const onMouseMove = (e) => {
      if (event.status === "mouse-down") {
        setTextDataTwo((s) => ({
          ...s,
          x: event.originalX + e.clientX - event.x,
          y: event.originalY + e.clientY - event.y,
        }));
      }
    };
    const onMouseUp = (e) => {
      if (event.status === "mouse-down") {
        setEvent((s) => ({ ...s, status: "mouse-up" }));
      }
    };

    const onClick = (e) => {
      setEdit((s) => e.target.classList.contains(textData.id));
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [
    textData.id,
    event.status,
    event.originalX,
    event.originalY,
    event.x,
    event.y,
    theTextDataTwo.x,
    theTextDataTwo.y,
  ]);

  React.useEffect(() => {
    if (textRef && ref) {
      ref.current = textRef.current;
      onUpdate();
    }
  });
  console.log("body align", theTextDataTwo.textAlign);
  // const handleFormatChange = (e) => {
  //   console.log("e", e.target.value);
  //   setTextDataTwo({
  //     ...theTextDataTwo,
  //     textAlign: e.target.value,
  //   });
  // };
  return (
    <div
      // style={{ textAlign: `${disEnableHeaderText}` }}
      className={classes.text}
    >
      <TextControls
        onBoldClick={() => {
          setTextDataTwo({
            ...theTextDataTwo,
            fontWeight:
              theTextDataTwo.fontWeight === "bold" ? "normal" : "bold",
          });
        }}
        onItalicClick={() => {
          setTextDataTwo({
            ...theTextDataTwo,
            fontStyle:
              theTextDataTwo.fontStyle === "italic" ? "normal" : "italic",
          });
        }}
        onUnderlineClick={() => {
          setTextDataTwo({
            ...theTextDataTwo,
            textDecoration:
              theTextDataTwo.textDecoration === "underline"
                ? "none"
                : "underline",
          });
        }}
        onFontSizeSelect={(e) => {
          setTextDataTwo({
            ...theTextDataTwo,
            fontSize: parseInt(e.target.value),
          });
        }}
        onFontFamilySelect={(e) => {
          setTextDataTwo({
            ...theTextDataTwo,
            fontFamily: e.target.value,
          });
        }}
        onFontColorChange={(e) => {
          setTextDataTwo({
            ...theTextDataTwo,
            color: e.target.value,
          });
        }}
        handleFormatChange={(e) => {
          setTextDataTwo({
            ...theTextDataTwo,
            textAlign: e.target.value,
          });
        }}
        // handleFormatChange={handleFormatChange}
        textData={theTextDataTwo}
        edit={edit}
        disEnableHeaderText={disEnableHeaderText}
      />

      <Border
        edit={edit}
        ref={borderRef}
        textData={theTextDataTwo}
        color="lightgrey"
      >
        <BaseText
          ref={textRef}
          textData={theTextDataTwo}
          edit={edit}
          onClick={() => setEdit(true)}
        />
      </Border>
    </div>
  );
});

export default BodyEditableText;
