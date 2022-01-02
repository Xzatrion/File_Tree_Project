import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="Rack_City.mp4" />
          <File name="Free_Falling.mp4" />
          <File name="Air_Tonight.mp4" />
        </Folder>
        <File name="aliens.jpg" />
        <File name="wutang.jpg" />
      </Folder>
      <Folder name="Applications">
        <File name="YouTube.exe" />
        <File name="Office.exe" />
      </Folder>
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;

  const direction = isOpen ? "down" : "right";

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <span onClick={handleClick}>
        <i className=" blue folder icon"></i>
        <i className={`caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "headphones",
    jpg: "file image",
    png: "file image outline",
    exe: "file code outline",
  };
  return (
    <div>
      <i className={`caret ${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
