import clsx from "clsx";
import React from "react";
import * as MaterialUI from "@material-ui/core";
// import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

const useStyles = MaterialUI.makeStyles((theme) => {
  return {
    textAlign: {
      textAlign: "center",
    },
  };
});

const AlignItems = ({ handleFormatChange, textData }) => {
  // const classes = useStyles({ textData });
  return (
    <div>
      {/* <div
        className=""
        class="btn-group text-btn-group"
        role="group"
        aria-label="Basic checkbox radio toggle button group"
      >
        <input
          defaultChecked
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio1"
          autocomplete="off"
          value="start"
          onChange={handleFormatChange}
        />
        <label class="btn btn-outline-primary" for="btnradio1">
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.711"
            height="16.023"
            viewBox="0 0 24.711 16.023"
          >
            <path
              id="Path_9540"
              data-name="Path 9540"
              d="M24.015,19.581H1.7a1.2,1.2,0,0,0,0,2.391H24.015a1.2,1.2,0,0,0,0-2.391ZM1.927,15.038a1.2,1.2,0,0,0,0,2.391H19.465a1.2,1.2,0,0,0,0-2.391ZM1.7,12.884H24.015a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Zm0-4.544H19.465a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Z"
              transform="translate(-0.5 -5.949)"
              fill="#292929"
            />
          </svg>
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
          value="center"
          onChange={handleFormatChange}
        />
        <label class="btn btn-outline-primary" for="btnradio2">
      
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.891"
            height="16.023"
            viewBox="0 0 22.891 16.023"
          >
            <path
              id="Path_9542"
              data-name="Path 9542"
              d="M9.145,22.289h20.6a1.145,1.145,0,0,0,0-2.289H9.145a1.145,1.145,0,0,0,0,2.289Zm2.289,2.289a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Zm18.312,4.578H9.145a1.145,1.145,0,0,0,0,2.289h20.6a1.145,1.145,0,0,0,0-2.289Zm-2.289,4.578H11.434a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Z"
              transform="translate(-8 -20)"
              fill="#292929"
            />
          </svg>
        </label>

        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
          value="end"
          onChange={handleFormatChange}
        />
        <label class="btn btn-outline-primary" for="btnradio3">
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.796"
            height="16.078"
            viewBox="0 0 24.796 16.078"
          >
            <path
              id="Path_9541"
              data-name="Path 9541"
              d="M1.7,8.349H24.1a1.2,1.2,0,0,0,0-2.4H1.7a1.2,1.2,0,0,0,0,2.4Zm22.164,2.16H6.266a1.2,1.2,0,0,0,0,2.4h17.6a1.2,1.2,0,0,0,0-2.4Zm.232,4.56H1.7a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Zm0,4.559H6.266a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Z"
              transform="translate(-0.5 -5.949)"
              fill="#292929"
            />
          </svg>
        </label>
      </div> */}
      <div className="d-flex align-icon">
        <button value="start" onClick={(e) => handleFormatChange(e)}>
          {/* <FormatAlignLeftIcon /> */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.711"
              height="16.023"
              viewBox="0 0 24.711 16.023"
            >
              <path
                id="Path_9540"
                data-name="Path 9540"
                d="M24.015,19.581H1.7a1.2,1.2,0,0,0,0,2.391H24.015a1.2,1.2,0,0,0,0-2.391ZM1.927,15.038a1.2,1.2,0,0,0,0,2.391H19.465a1.2,1.2,0,0,0,0-2.391ZM1.7,12.884H24.015a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Zm0-4.544H19.465a1.2,1.2,0,0,0,0-2.391H1.7a1.2,1.2,0,0,0,0,2.391Z"
                transform="translate(-0.5 -5.949)"
                fill="#292929"
              />
            </svg> */}
          1
        </button>
        <button value="center" onClick={(e) => handleFormatChange(e)}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.891"
            height="16.023"
            viewBox="0 0 22.891 16.023"
          >
            <path
              id="Path_9542"
              data-name="Path 9542"
              d="M9.145,22.289h20.6a1.145,1.145,0,0,0,0-2.289H9.145a1.145,1.145,0,0,0,0,2.289Zm2.289,2.289a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Zm18.312,4.578H9.145a1.145,1.145,0,0,0,0,2.289h20.6a1.145,1.145,0,0,0,0-2.289Zm-2.289,4.578H11.434a1.145,1.145,0,0,0,0,2.289H27.457a1.145,1.145,0,0,0,0-2.289Z"
              transform="translate(-8 -20)"
              fill="#292929"
            />
          </svg> */}
          2
        </button>
        <button value="end" onClick={(e) => handleFormatChange(e)}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24.796"
            height="16.078"
            viewBox="0 0 24.796 16.078"
          >
            <path
              id="Path_9541"
              data-name="Path 9541"
              d="M1.7,8.349H24.1a1.2,1.2,0,0,0,0-2.4H1.7a1.2,1.2,0,0,0,0,2.4Zm22.164,2.16H6.266a1.2,1.2,0,0,0,0,2.4h17.6a1.2,1.2,0,0,0,0-2.4Zm.232,4.56H1.7a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Zm0,4.559H6.266a1.2,1.2,0,0,0,0,2.4H24.1a1.2,1.2,0,0,0,0-2.4Z"
              transform="translate(-0.5 -5.949)"
              fill="#292929"
            />
          </svg> */}
          3
        </button>
      </div>
    </div>
  );
};

export default AlignItems;
