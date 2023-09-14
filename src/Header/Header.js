import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <img
        src="./image/Logo.png"
        style={{ margin: 40, marginLeft: "110px" }}
      ></img>
      <form
        style={{
          marginTop: "40px",
          borderRadius: "0",
        }}
      >
        <input
          type="password"
          class="form-control"
          id="pwd"
          placeholder="Search"
          name="pswd"
        ></input>
      </form>
      <img src="./image/Group 51.png" style={{ margin: 40 }}></img>
      <img src="./image/a.banner-btn (1).png" style={{ margin: 40 }}></img>
      <p style={{ marginTop: "50px" }}>Samantha</p>
      <img src="./image/ByeWind.png" style={{ margin: 50 }} />
    </div>
  );
};

export default Header;
