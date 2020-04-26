import React from "react";
import "./style.css";
import { Card, Img, Body, Title, Text, Button } from 'react-bootstrap';

function ProjectCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ margin: 0 }} alt={props.project} src={props.image} />
      <Card.Body>
        <Card.Title>{props.project}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text>
          {props.technologies}
        </Card.Text>
        <Button variant="primary" href={props.applicationURL} size="md" style={{ margin: "5px" }} target="_blank">
          Launch App
        </Button>
        <Button variant="primary" href={props.githubURL} size="md" style={{ margin: "5px"}} target="_blank"> <i className="fa fa-github"></i> REPO
        </Button>
      </Card.Body>
    </Card>

// <div className="card">
    //   <div className="img-container">
    //     <img alt={props.project} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Project:</strong> {props.project}
    //       </li>
    //       <li>
    //         <strong>Description:</strong> {props.description}
    //       </li>
    //       <li>
    //         <strong>Technologies:</strong> {props.technologies}
    //       </li>
    //       <li>
    //         <strong>Application URL:</strong>
    //         <a href={props.applicationURL}>{props.applicationURL}</a>
    //       </li>
    //       <li>
    //         <strong>Github URL:</strong>
    //         <a href={props.githubURL}>{props.githubURL}</a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default ProjectCard;
