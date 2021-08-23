import React, { useState } from "react";
import Draggable from "react-draggable";
import TestClass from "../TestSector/TestClass";

import "./MainBody.css";

const MainBody = ({
  selectedPictogramsImg,
  imgState,
  selectedImg,
  color,
  pictogramImgDataCancel,
  fontName,
  fontSizeName,
  currentRadioFormatValue,
  textColor,
  isEditable,
  handleOnDoubleDraggable,
  domNode,
}) => {
  let { id, item } = selectedImg;
  return (
    <div>
      <div className="template">
        <DraggableButtonInCard
          id={id}
          item={item}
          selectedPictogramsImg={selectedPictogramsImg}
          imgState={imgState}
          bgColor={color}
          handleOnDoubleDraggable={handleOnDoubleDraggable}
          // handleOnBlurDraggable={handleOnBlurDraggable}
          // setIsEditable={setIsEditable}
          isEditable={isEditable}
          pictogramImgDataCancel={pictogramImgDataCancel}
          fontName={fontName}
          fontSizeName={fontSizeName}
          currentRadioFormatValue={currentRadioFormatValue}
          textColor={textColor}
          domNode={domNode}
        />
        {/* <DraggableButtonInCard text="Drop" bgColor="#00A2FF" /> */}
      </div>
    </div>
  );
};

const DraggableButtonInCard = ({
  id,
  item,
  selectedPictogramsImg,
  imgState,
  bgColor,
  handleOnDoubleDraggable,
  setIsEditable,
  handleOnBlurDraggable,
  isEditable,
  pictogramImgDataCancel,
  fontName,
  fontSizeName,
  currentRadioFormatValue,
  textColor,
  domNode,
}) => {
  return (
    <div>
      {item == "01" && (
        <div className="main-caution-second">
          {id == "01" && (
            <div className="templates-header-one caution-bg-color">
              <div className="header-icon ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50.627"
                  height="54.975"
                  viewBox="0 0 60.627 54.975"
                >
                  <path
                    id="Path_9738"
                    data-name="Path 9738"
                    d="M59.414,63.991,38.174,27.2a9.038,9.038,0,0,0-15.7,0L1.223,63.991a9.08,9.08,0,0,0,7.85,13.628H51.49A9.127,9.127,0,0,0,59.414,63.991Zm-29.1,5.466a3.382,3.382,0,1,1,0-6.764,3.383,3.383,0,0,1,0,6.764Zm3.082-21.864c-.15,2.621-.312,5.229-.462,7.85-.075.849-.075,1.622-.075,2.458a2.547,2.547,0,0,1-2.546,2.458,2.492,2.492,0,0,1-2.546-2.384c-.225-4.081-.462-8.087-.686-12.167-.075-1.073-.15-2.159-.237-3.232a3.674,3.674,0,0,1,2.621-3.694A3.393,3.393,0,0,1,33.395,40.8a4.032,4.032,0,0,1,.312,1.7C33.632,44.211,33.47,45.908,33.395,47.593Z"
                    transform="translate(0 -22.643)"
                    fill="#fff"
                  />
                </svg>
              </div>

              <h1 className="templates-header-h1">CAUTION</h1>
            </div>
          )}
          {id == "02" && (
            <div className="templates-header-one danger-bg-color">
              <div className="header-icon ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50.627"
                  height="54.975"
                  viewBox="0 0 60.627 54.975"
                >
                  <path
                    id="Path_9738"
                    data-name="Path 9738"
                    d="M59.414,63.991,38.174,27.2a9.038,9.038,0,0,0-15.7,0L1.223,63.991a9.08,9.08,0,0,0,7.85,13.628H51.49A9.127,9.127,0,0,0,59.414,63.991Zm-29.1,5.466a3.382,3.382,0,1,1,0-6.764,3.383,3.383,0,0,1,0,6.764Zm3.082-21.864c-.15,2.621-.312,5.229-.462,7.85-.075.849-.075,1.622-.075,2.458a2.547,2.547,0,0,1-2.546,2.458,2.492,2.492,0,0,1-2.546-2.384c-.225-4.081-.462-8.087-.686-12.167-.075-1.073-.15-2.159-.237-3.232a3.674,3.674,0,0,1,2.621-3.694A3.393,3.393,0,0,1,33.395,40.8a4.032,4.032,0,0,1,.312,1.7C33.632,44.211,33.47,45.908,33.395,47.593Z"
                    transform="translate(0 -22.643)"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h1 className="templates-header-h1">DANGER</h1>
            </div>
          )}
          {id == "03" && (
            <div className="templates-header-one small-notice-bg-color">
              <h1 className="templates-header-h1">Notice</h1>
            </div>
          )}
          {id == "04" && (
            <div className="templates-header-one big-notice-bg-color">
              <h1 className="templates-header-h1 templates-header-bold">
                Notice
              </h1>
            </div>
          )}
          {id == "05" && (
            <div className="templates-header-one warning-bg-color">
              <div className="header-icon ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50.627"
                  height="54.975"
                  viewBox="0 0 60.627 54.975"
                >
                  <path
                    id="Path_9738"
                    data-name="Path 9738"
                    d="M59.414,63.991,38.174,27.2a9.038,9.038,0,0,0-15.7,0L1.223,63.991a9.08,9.08,0,0,0,7.85,13.628H51.49A9.127,9.127,0,0,0,59.414,63.991Zm-29.1,5.466a3.382,3.382,0,1,1,0-6.764,3.383,3.383,0,0,1,0,6.764Zm3.082-21.864c-.15,2.621-.312,5.229-.462,7.85-.075.849-.075,1.622-.075,2.458a2.547,2.547,0,0,1-2.546,2.458,2.492,2.492,0,0,1-2.546-2.384c-.225-4.081-.462-8.087-.686-12.167-.075-1.073-.15-2.159-.237-3.232a3.674,3.674,0,0,1,2.621-3.694A3.393,3.393,0,0,1,33.395,40.8a4.032,4.032,0,0,1,.312,1.7C33.632,44.211,33.47,45.908,33.395,47.593Z"
                    transform="translate(0 -22.643)"
                    fill="#fff"
                  />
                </svg>
              </div>
              <h1 className="templates-header-h1 ">Warning</h1>
            </div>
          )}
          <div
            style={{ backgroundColor: bgColor }}
            className="d-flex second-templates"
          >
            <div className="second-templates-body">
              <div>
                <Draggable>
                  <div className="d-flex">
                    <img width="90px" src={selectedPictogramsImg.img} alt="" />
                    {selectedPictogramsImg.img == null || (
                      <div
                        onClick={pictogramImgDataCancel}
                        style={{ width: "20px", cursor: "pointer" }}
                      >
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </Draggable>
                <Draggable>
                  <img width="100px" src={imgState.file} alt="" />
                </Draggable>
              </div>
            </div>
            <div>
              <div className="templates-footer">
                <div
                  // onMouseLeave={handleOnBlurDraggable}
                  onDoubleClick={handleOnDoubleDraggable}
                  raf={domNode}
                >
                  {isEditable == true && (
                    <Draggable>
                      <div>
                        <TestClass
                          fontSizeName={fontSizeName}
                          bgColor={bgColor}
                          fontName={fontName}
                          currentRadioFormatValue={currentRadioFormatValue}
                          textColor={textColor}
                        />
                      </div>
                      {/* <h6>WRITE PENALTY PROVISIONS</h6> */}
                    </Draggable>
                  )}

                  {isEditable == false && (
                    <div>
                      <TestClass
                        fontSizeName={fontSizeName}
                        bgColor={bgColor}
                        fontName={fontName}
                        currentRadioFormatValue={currentRadioFormatValue}
                        textColor={textColor}
                      />
                      {/* <h6>WRITE PENALTY PROVISIONS</h6> */}
                    </div>
                  )}
                </div>
                <Draggable>
                  <h6>WRITE PENALTY PROVISIONS</h6>
                </Draggable>
              </div>
            </div>
          </div>
        </div>
      )}
      {item == "02" && (
        <div className="mainBody-container">
          <div className="main-caution">
            {id == "06" && (
              <div className="templates-header caution-bg-color">
                <div className="header-icon-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.403"
                    height="37.544"
                    viewBox="0 0 41.403 37.544"
                  >
                    <path
                      id="Path_9738"
                      data-name="Path 9738"
                      d="M40.576,50.88,26.07,25.756a6.172,6.172,0,0,0-10.721,0L.835,50.88A6.2,6.2,0,0,0,6.2,60.187H35.164A6.233,6.233,0,0,0,40.576,50.88ZM20.7,54.613a2.31,2.31,0,1,1,0-4.619,2.31,2.31,0,0,1,0,4.619Zm2.105-14.932c-.1,1.79-.213,3.571-.315,5.361-.051.58-.051,1.108-.051,1.679A1.74,1.74,0,0,1,20.7,48.4a1.7,1.7,0,0,1-1.739-1.628c-.153-2.787-.315-5.523-.469-8.309-.051-.733-.1-1.474-.162-2.207a2.509,2.509,0,0,1,1.79-2.523,2.317,2.317,0,0,1,2.685,1.312,2.753,2.753,0,0,1,.213,1.159C22.968,37.372,22.857,38.531,22.806,39.682Z"
                      transform="translate(0 -22.643)"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h1 className="templates-second-header-h1">CAUTION</h1>
              </div>
            )}

            {id == "07" && (
              <div className="templates-header danger-bg-color">
                <div className="header-icon-two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.403"
                    height="37.544"
                    viewBox="0 0 41.403 37.544"
                  >
                    <path
                      id="Path_9738"
                      data-name="Path 9738"
                      d="M40.576,50.88,26.07,25.756a6.172,6.172,0,0,0-10.721,0L.835,50.88A6.2,6.2,0,0,0,6.2,60.187H35.164A6.233,6.233,0,0,0,40.576,50.88ZM20.7,54.613a2.31,2.31,0,1,1,0-4.619,2.31,2.31,0,0,1,0,4.619Zm2.105-14.932c-.1,1.79-.213,3.571-.315,5.361-.051.58-.051,1.108-.051,1.679A1.74,1.74,0,0,1,20.7,48.4a1.7,1.7,0,0,1-1.739-1.628c-.153-2.787-.315-5.523-.469-8.309-.051-.733-.1-1.474-.162-2.207a2.509,2.509,0,0,1,1.79-2.523,2.317,2.317,0,0,1,2.685,1.312,2.753,2.753,0,0,1,.213,1.159C22.968,37.372,22.857,38.531,22.806,39.682Z"
                      transform="translate(0 -22.643)"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h1 className="templates-second-header-h1">Danger</h1>
              </div>
            )}
            {id == "09" && (
              <div className="templates-header small-notice-bg-color">
                <h1 className="templates-second-header-h1">Notice</h1>
              </div>
            )}
            {id == "08" && (
              <div className="templates-header big-notice-bg-color">
                <h1 className="templates-second-header-h1 templates-header-bold">
                  Notice
                </h1>
              </div>
            )}
            {id == "10" && (
              <div className="templates-header warning-bg-color">
                <div className="header-icon-two-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.403"
                    height="37.544"
                    viewBox="0 0 41.403 37.544"
                  >
                    <path
                      id="Path_9738"
                      data-name="Path 9738"
                      d="M40.576,50.88,26.07,25.756a6.172,6.172,0,0,0-10.721,0L.835,50.88A6.2,6.2,0,0,0,6.2,60.187H35.164A6.233,6.233,0,0,0,40.576,50.88ZM20.7,54.613a2.31,2.31,0,1,1,0-4.619,2.31,2.31,0,0,1,0,4.619Zm2.105-14.932c-.1,1.79-.213,3.571-.315,5.361-.051.58-.051,1.108-.051,1.679A1.74,1.74,0,0,1,20.7,48.4a1.7,1.7,0,0,1-1.739-1.628c-.153-2.787-.315-5.523-.469-8.309-.051-.733-.1-1.474-.162-2.207a2.509,2.509,0,0,1,1.79-2.523,2.317,2.317,0,0,1,2.685,1.312,2.753,2.753,0,0,1,.213,1.159C22.968,37.372,22.857,38.531,22.806,39.682Z"
                      transform="translate(0 -22.643)"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <h1 className="templates-second-header-h1 ">Warning</h1>
              </div>
            )}
            <div>
              <div
                style={{ backgroundColor: bgColor }}
                className="templates-body"
              >
                <Draggable>
                  <img src={selectedPictogramsImg.img} alt="" />
                </Draggable>
                <Draggable>
                  <img width="100px" src={imgState.file} alt="" />
                </Draggable>
              </div>
              <div
                style={{ backgroundColor: bgColor }}
                className="templates-footer"
              >
                <Draggable>
                  <h5>WRITE CONSEQUENCES OF NOT FOLLOWING </h5>
                </Draggable>
                <Draggable>
                  <h6>WRITE PENALTY PROVISIONS</h6>
                </Draggable>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    // <Card style={{ width: "40%", backgroundColor: bgColor, color: "#ffffff", padding: "30px" }}>
    //     <Draggable>
    //         <img style={{ width: "300px" }} src={img} alt="" />
    //     </Draggable>
    //     <br />
    //     <Draggable>
    //         <Button variant="text">{head}</Button>
    //     </Draggable>
    //     <Draggable>
    //         <Typography variant="h6">{text}</Typography>
    //         <div className="templates-footer">
    //           <h5>WRITE CONSEQUENCES OF NOT FOLLOWING</h5>

    //           <h6>WRITE PENALTY PROVISIONS</h6>
    //         </div>
    //     </Draggable>

    // </Card>
  );
};

export default MainBody;
