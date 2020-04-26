import React from "react";
import Footer from "../Footer";

const divStyle = {
    color: '#1D6768',
    fontFamily: "'Georgia', Times, 'Times New Roman', serif",
};

function Home() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 style={divStyle}> About Me</h2>
                            <hr className="line_className" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src="assets\images\Suddu_Profile_Pic_TMO.JPG" alt="Sudar Meruva"  height="375" />
                        </div>
                        <div className="col-md-6">
                            <p>Managed a team of developers and testers buildig a Wed-based custom products for Network Operations Center and Retail. Implemented technology solutions in fast-paced environment, growing from 15 developers to 100 developerss and managing $10M budget.
                            
                            Hired, managed and motivated team of developers, managers, to carry out complex projects from the concept phase through
                            architecture design,
                            implementation, and DevOps to maintenance.
                            </p>
                            <p>I am certified Scrum Master and successfully introduced Agile Scrum development in my
                            team.
                            In
                            addition to
                            working as Sr. DevOps Manager, i have experience as a Software Development
                            Manager to manager onsite and offshore developers.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p>Built a high-performance team, started ESD BI & ESD NDW Teams, established Offshore
                            Development
                            teams and saved
                            over $20M over 8 years.
                            </p>
                            <p>Team Transformation - Lead Waterfall to Agile Scrum transformation, Windows -> Web ->
                            Responsive
                            HTML5, Auto
                            deployment (CI/CD), Auto Test and DevOps.
                            </p>
                            <p> My interest outside of work is my Home Theater, Coaching Rec Soccer, Cheer my son at EDP
                            Soccer
                            league, Help
                            out my daughter’s Girl Scout Troop and gardening in spring and summer.
                            </p>
                            <p>Please find my recent projects in latest technologies under Portfolio tab and feel free to contact me
                            </p>                            
                            <hr className="line_className" />
                        </div>
                    </div>
                </div>
                <div className="push"></div>
            </div>
        </div>    
    );
}

export default Home;
