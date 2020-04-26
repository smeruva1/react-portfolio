import React from "react";
import Title from "../Title";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-11">
          <div className="row">
            <div className="col-md-12">
              <Title>Project List</Title>
              <div className="wrapper">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
