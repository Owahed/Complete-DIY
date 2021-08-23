import React, { useState } from "react";
import { CompactPicker } from "react-color";
import "./Text.css";

const Text = ({
  EditButton,
  fontChange,
  fontSizeChange,
  handleRadioFormatChange,
  setTextColor,
}) => {
  const [showTextColorPicker, setTextColorPicker] = useState(false);
  return (
    <div>
      <div className="mt-5 pb-2">
        <h4 className="pictograms-h4">Text</h4>
      </div>
      <div className="text-container-body">
        <button className="text-header-title text-h2">
          <h2>Add a Heading</h2>
        </button>
        <button className="text-header-title text-h5">
          <h5>Add a Sub-Heading</h5>
        </button>
        <button className="text-header-title text-h6">
          <p>Add Body Text</p>
        </button>
      </div>
      <div className="my-3 d-flex justify-content-center">
        <hr className="text-hr" />
      </div>
      <div className="d-flex justify-content-center text-white">
        <div>
          <label for="font">Font</label>
          <br />
          <select
            onChange={(e) => fontChange(e)}
            className="option font-option"
            id="font"
          >
            <option value="Open Sans"> Open Sans</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label for="size">Size</label>
          <br />
          <select
            onChange={(e) => fontSizeChange(e)}
            className="option size-option"
            id="size"
          >
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
          </select>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <EditButton cmd="bold" />
        <EditButton cmd="italic" />
        {/* <EditButton cmd="underline" /> */}

        <div
          className=""
          class="btn-group text-btn-group"
          role="group"
          aria-label="Basic checkbox radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            onChange={handleRadioFormatChange}
          />
          <label class="btn btn-outline-primary" for="btnradio1">
            {/* Radio 1 */}
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
            onChange={handleRadioFormatChange}
          />
          <label class="btn btn-outline-primary" for="btnradio2">
            {/* Radio 2 */}
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
            onChange={handleRadioFormatChange}
          />
          <label class="btn btn-outline-primary" for="btnradio3">
            {/* Radio 3 */}
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
        </div>
      </div>
      <div
        class="btn-group text-btn-group-two"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        <div className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.05"
            height="15.844"
            viewBox="0 0 25.05 15.844"
          >
            <g
              id="Group_291"
              data-name="Group 291"
              transform="translate(-276.054 -779.999)"
            >
              <path
                id="FontAwsome_align-justify_"
                data-name="FontAwsome (align-justify)"
                d="M15.278,45.58H.566A.566.566,0,0,0,0,46.146v1.132a.566.566,0,0,0,.566.566H15.278a.566.566,0,0,0,.566-.566V46.146A.566.566,0,0,0,15.278,45.58Zm0-4.527H.566A.566.566,0,0,0,0,41.619v1.132a.566.566,0,0,0,.566.566H15.278a.566.566,0,0,0,.566-.566V41.619A.566.566,0,0,0,15.278,41.053Zm0-4.527H.566A.566.566,0,0,0,0,37.093v1.132a.566.566,0,0,0,.566.566H15.278a.566.566,0,0,0,.566-.566V37.093A.566.566,0,0,0,15.278,36.527Zm0-4.527H.566A.566.566,0,0,0,0,32.566V33.7a.566.566,0,0,0,.566.566H15.278a.566.566,0,0,0,.566-.566V32.566A.566.566,0,0,0,15.278,32Z"
                transform="translate(285.26 748)"
                fill="#292929"
              />
              <g
                id="Group_290"
                data-name="Group 290"
                transform="translate(276.054 779.999)"
              >
                <path
                  id="FontAwsome_angle-up_"
                  data-name="FontAwsome (angle-up)"
                  d="M3.971,152.822l3.089,3.089a.543.543,0,0,1,0,.77l-.513.513a.543.543,0,0,1-.77,0l-2.192-2.187L1.4,157.2a.543.543,0,0,1-.77,0l-.516-.513a.543.543,0,0,1,0-.77L3.2,152.825A.544.544,0,0,1,3.971,152.822Z"
                  transform="translate(0.05 -152.662)"
                  fill="#292929"
                />
                <path
                  id="FontAwsome_angle-down_"
                  data-name="FontAwsome (angle-down)"
                  d="M3.2,157.284l-3.09-3.09a.543.543,0,0,1,0-.77l.514-.514a.543.543,0,0,1,.77,0l2.19,2.19,2.19-2.19a.543.543,0,0,1,.77,0l.514.514a.543.543,0,0,1,0,.77l-3.09,3.09A.54.54,0,0,1,3.2,157.284Z"
                  transform="translate(0.05 -141.601)"
                  fill="#292929"
                />
                <line
                  id="Line_30"
                  data-name="Line 30"
                  y2="13.272"
                  transform="translate(3.634 1.244)"
                  fill="none"
                  stroke="#292929"
                  stroke-width="2"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.844"
            height="15.844"
            viewBox="0 0 15.844 15.844"
          >
            <g
              id="Group_293"
              data-name="Group 293"
              transform="translate(-2.5 -2.5)"
            >
              <rect
                id="Rectangle_105"
                data-name="Rectangle 105"
                width="4.532"
                height="4.532"
                transform="translate(8.148 8.148)"
                fill="#292929"
              />
              <path
                id="Path_9572"
                data-name="Path 9572"
                d="M2.5,3.183V17.661a.686.686,0,0,0,.683.683H17.661a.686.686,0,0,0,.683-.683V3.183a.686.686,0,0,0-.683-.683H3.183A.676.676,0,0,0,2.5,3.183Zm10.179,9.5v4.448H8.148V12.679H3.7V8.148H8.148V3.7h4.532V8.148h4.448v4.532Z"
                fill="#292929"
              />
            </g>
          </svg>
        </div>
        <div
          onClick={() =>
            setTextColorPicker((showColorPicker) => !showColorPicker)
          }
          className="btn"
        >
          {showTextColorPicker ? (
            <div style={{ width: "20px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g
                id="Layer_2"
                data-name="Layer 2"
                transform="translate(0 0.014)"
              >
                <g
                  id="invisible_box"
                  data-name="invisible box"
                  transform="translate(0 -0.014)"
                >
                  <rect
                    id="Rectangle_107"
                    data-name="Rectangle 107"
                    width="20"
                    height="20"
                    fill="none"
                  />
                </g>
                <g
                  id="icons_Q2"
                  data-name="icons Q2"
                  transform="translate(1.665 1.666)"
                >
                  <path
                    id="Path_9576"
                    data-name="Path 9576"
                    d="M19.739,5.665H11.37A2.581,2.581,0,0,0,9,4,2.5,2.5,0,0,0,6.665,5.665H4.916A.874.874,0,0,0,4,6.5a.874.874,0,0,0,.916.833H6.665A2.5,2.5,0,0,0,9,9,2.581,2.581,0,0,0,11.37,7.331h8.369a.874.874,0,0,0,.916-.833.874.874,0,0,0-.916-.833ZM9,7.331A.833.833,0,1,1,9.829,6.5.833.833,0,0,1,9,7.331Z"
                    transform="translate(-4 -4)"
                    fill="#292929"
                  />
                  <path
                    id="Path_9577"
                    data-name="Path 9577"
                    d="M19.855,19.665H18.148A2.581,2.581,0,0,0,15.775,18a2.5,2.5,0,0,0-2.332,1.665H5.033a.833.833,0,1,0,0,1.665h8.411A2.5,2.5,0,0,0,15.775,23a2.581,2.581,0,0,0,2.373-1.665h1.707a.833.833,0,1,0,0-1.665Zm-4.08,1.665a.833.833,0,1,1,.833-.833A.833.833,0,0,1,15.775,21.331Z"
                    transform="translate(-4.117 -12.171)"
                    fill="#292929"
                  />
                  <path
                    id="Path_9578"
                    data-name="Path 9578"
                    d="M19.855,33.665h-7.12A2.581,2.581,0,0,0,10.362,32a2.5,2.5,0,0,0-2.332,1.665h-3a.833.833,0,1,0,0,1.665h3A2.5,2.5,0,0,0,10.362,37a2.581,2.581,0,0,0,2.373-1.665h7.12a.833.833,0,1,0,0-1.665Zm-9.493,1.665a.833.833,0,1,1,.833-.833A.833.833,0,0,1,10.362,35.331Z"
                    transform="translate(-4.117 -20.342)"
                    fill="#292929"
                  />
                </g>
              </g>
            </svg>
          )}
          {showTextColorPicker && (
            <CompactPicker
              className="text-color-pic"
              // color={color}
              onChange={(updateTextColor) => setTextColor(updateTextColor.hex)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Text;
