import React from "react";

const LatestNews = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h6
          style={{
            color: "rgb(35, 42, 76)",
            paddingLeft: "105px",
            paddingTop: "30px",
          }}
        >
          <b>Latest News</b>
        </h6>
        <h6
          style={{
            color: "black",
            paddingLeft: "105px",
            paddingTop: "20px",
          }}
        >
          <b>
            Robert Kennedy Jr., Soon to Announce White House Run, Sows Doubts
            <br></br>
            About Vaccines
          </b>
        </h6>
        <br></br>
        <p
          style={{
            color: "black",
            paddingLeft: "105px",
          }}
        >
          Mr. Kennedy, a Democrat who plans to kick off his campaign this week,
          spreads<br></br> misinformation about vaccines by twisting facts out
          of context. “Even in Hitler’s<br></br> Germany, you could cross the
          Alps to Switzerland,” he told a crowd..
        </p>
        <img
          src="./image/Group 4.png"
          style={{
            paddingLeft: "105px",
          }}
        />

        <h6
          style={{
            color: "black",
            paddingLeft: "105px",
            paddingTop: "55px",
          }}
        >
          <b>
            East Harlem could get 32-unit, dorm-style building for homeless
            <br></br>
            youth
          </b>
        </h6>
        <br></br>
        <p
          style={{
            color: "black",
            paddingLeft: "105px",
          }}
        >
          A plan to build a dormitory-style apartment complex in East Harlem
          <br></br> hearkens back to the “single-room occupancy” model that was
          once a<br></br> crucial low-income..
        </p>
        <img
          src="./image/Group 4.png"
          style={{
            paddingLeft: "105px",
          }}
        />
      </div>

      <div>
        <img
          src="./image/sb-banner.jpg.png"
          style={{
            position: "relative",
            marginLeft: "150px",
            paddingTop: "30px",
            width: "298px",
            height: "500px",
          }}
        />
        <img
          src="./image/Rectangle 37.png"
          style={{
            position: "relative",
            position: "absolute",
            zIndex: "-0",
            marginLeft: "-298px",
            paddingTop: "30px",
            width: "298px",
            height: "500px",
          }}
        />
        <h4
          style={{
            position: "absolute",
            position: "relative",
            marginTop: "-400px",
            marginLeft: "190px",
            color: "white",
          }}
        >
          <b>Create an Amazing</b>
          <br></br>
        </h4>
        <h4
          style={{
            position: "absolute",
            position: "relative",
            marginTop: "20px",
            marginLeft: "230px",
            color: "white",
          }}
        >
          <b>Newspaper</b>
        </h4>

        <p
          style={{
            position: "absolute",
            position: "relative",
            marginTop: "30px",
            marginLeft: "138px",
            textAlign: "center",
            color: "white",
          }}
        >
          Discover thousands of<br></br> options, easy to<br></br>customize
          layouts, one-<br></br>click to import demo<br></br>and much more.
        </p>
        <button
          type="button"
          class="btn btn-danger"
          style={{
            backgroundColor: "rgb(183, 5, 11)",
            borderRadius: "6px ",
            position: "absolute",
            marginLeft: "219px",
            marginTop: "50px",
            padding: "0.3rem 2rem 0.5rem 2rem",
          }}
        >
          Learn More
        </button>

        <img
          src="./image/Frame 14.png"
          style={{
            position: "relative",
            marginLeft: "-20px",
            marginTop: "-10px",
          }}
        />
      </div>
    </div>
  );
};

export default LatestNews;
