import React from "react";
// import "./style.css";

const divStyle = {
  color: '#1D6768',
  fontFamily: "'Georgia', Times, 'Times New Roman', serif",
};

function Title(props) {
  return (
    <>
      <h2 style={divStyle}>{props.children}</h2>
      <hr className="line_className" />
    </>
  );
}

export default Title;
