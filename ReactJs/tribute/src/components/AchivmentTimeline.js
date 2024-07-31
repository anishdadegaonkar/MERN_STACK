import React from "react";

const AchivmentTimeline = (props) => {
  const achivmentstyles = {
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    padding: "10px",
    margin: "10px 108px",
    borderTop: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    borderRadius: "5px",
    fontFamily: "Arial, sans-serif",
    boxshadow: "0px 5px 10px rgba(0,0,0,0.2)",
  };
  return (
    <div className="container" style={achivmentstyles}>
      <div className="row col-md-12">
        <div className="col-md-6">
          <div className="card" style={{width:"30rem",textAlign:"justify",height:"210px"}}>
            <div className="card-body">
              <h5 className="card-title">Achievements</h5>
              <ul >
                <li>
                  <p>Year 2019: Padma Shri</p>
                </li>
                <li>
                  <p>Year 2013: LG People's Choice Award</p>
                </li>
              </ul><br></br>
              <a href="#" className="btn btn-primary">
                See More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
        <div className="card" style={{width:"30rem",textAlign:"justify"}}>
        <div className="card-body">
          <h5 className="card-title">{props.h2}</h5>
          <p className="card-text">
          {props.p}
          </p>
          <a href="#" className="btn btn-primary">
            See more
          </a>
        </div>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default AchivmentTimeline;
