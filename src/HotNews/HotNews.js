import React from "react";

const HotNews = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src="./image/Rectangle.png"
        style={{
          //   margin: 10,
          //   marginLeft: "-82%",
          width: "100%",
          height: "10%",
        }}
      ></img>

      <img src="./image/tag.png" style={{ marginLeft: "-92%" }} />
      <p style={{ fontSize: "13px", paddingTop: "8px", marginRight: "5%" }}>
        Google Devises Radical Search Changes to Beat Back A.I. Rivals
      </p>

      <img src="./image/tag1.png" style={{ marginRight: "-50%" }} />
      <p style={{ marginLeft: "50%", fontSize: "13px", paddingTop: "8px" }}>
        Man walks into Target and steals 62 iPhones in Manhattan, New Y
      </p>
    </div>
  );
};

export default HotNews;
