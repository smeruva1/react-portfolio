import React from "react";
import Title from "../Title";
import "./style.css";

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};


function Wrapper(props) {
  return (
    <div className="container topdiv" style={divStyle}>
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
