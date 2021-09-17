import React from "react";
import * as MaterialUI from "@material-ui/core";
import clsx from "clsx";
import FontStyles from "./fontstyles";
import FontSizeSelect from "./fontsizeselect";
import FontFamilySelect from "./fontfamilyselect";
import FontColor from "./fontcolor";
import ClearIcon from "@material-ui/icons/Clear";
import AlignItems from "./AlignItems/AlignItems";
import AlignItemsBody from "./AlignItems/AlignItemsBody";

const useStyles = MaterialUI.makeStyles((theme) => {
  return {
    textControls: {
      display: "flex",
      alignItems: "center",
    },
    transparent: {
      opacity: 0,
      pointerEvents: "none",
    },
  };
});

const TextControlsBody = (props) => {
  const {
    textData,
    edit,
    disEnableHeaderText,
    handleBodyFormatChange,
    handleFormatChange,
  } = props;
  console.log(props);

  const classes = useStyles({ textData });

  const textCancel = {
    cursor: "pointer",

    top: "10px",
  };
  return (
    <div
      style={{
        backgroundColor: "#f6f6f6",
      }}
      className={clsx(
        classes.textControls,
        { [classes.transparent]: !edit },
        textData.id
      )}
    >
      <FontStyles {...props} />

      <AlignItemsBody
        key={textData.tag}
        handleBodyFormatChange={handleBodyFormatChange}
      />
      <FontSizeSelect {...props} />
      <FontFamilySelect {...props} />
      <FontColor {...props} />
      <div style={textCancel} onClick={disEnableHeaderText}>
        <ClearIcon />
      </div>
    </div>
  );
};

export default TextControlsBody;
