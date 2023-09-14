import React from "react";

const Header3 = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src="./image/Rectangle 1.png"
        style={{ margin: 0, width: "100%", height: "10%", marginLeft: "0px" }}
      ></img>

      <img
        src="./image/Category1.png"
        style={{
          margin: 10,
          marginLeft: "-91%",
          position: "absolute",
          position: "relative",
          zIndex: "1000",
        }}
      ></img>
    </div>
  );
};

export default Header3;
