import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.project} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {props.project}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Technologies:</strong> {props.technologies}
          </li>
          <li>
            <strong>Application URL:</strong>
            <a href={props.applicationURL}>{props.applicationURL}</a>
          </li>
          <li>
            <strong>Github URL:</strong>
            <a href={props.githubURL}>{props.githubURL}</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
