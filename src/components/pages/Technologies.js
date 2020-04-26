import React from "react";

const divStyle = {
  color: '#1D6768',
  fontFamily: "'Georgia', Times, 'Times New Roman', serif",
};


function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-12">
              <h2 style={divStyle}>Technology Summary</h2>
              <hr className="line_className" />
            </div>
          </div>
          <img src="assets\images\TechnologyStack.jpg" className="img-fluid img-rounded" alt="Technologies" />
        </div>
        <hr className="line_className" />
      </div>

    </div>
  );
}

export default Projects;
