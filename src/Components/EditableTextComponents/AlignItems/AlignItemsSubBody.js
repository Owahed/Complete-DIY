import React from "react";

const AlignItemsBody = ({ handleFormatChange, textData }) => {
  return (
    <div>
      <div className="d-flex align-icon">
        <button value="start" onClick={(e) => handleFormatChange(e)}>
          1
        </button>
        <button value="center" onClick={(e) => handleFormatChange(e)}>
          2
        </button>
        <button value="end" onClick={(e) => handleFormatChange(e)}>
          3
        </button>
      </div>
    </div>
  );
};

export default AlignItemsBody;
