import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../projects.json";
import Wrapper from "../../components/Wrapper";

class Portfolio extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };

  render() {    
      return (
        <Wrapper>        
          {this.state.projects.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              project={project.project}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              applicationURL={project.applicationURL}
              githubURL={project.githubURL}
            />
          ))}
        </Wrapper>
      );    
  }
  
}
export default Portfolio;
