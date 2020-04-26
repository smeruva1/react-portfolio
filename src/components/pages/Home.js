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
                            <img src="assets\images\sudar.JPG" alt="Sudar Meruva" height="300" width="300" />
                        </div>
                        <div className="col-md-6">
                            <p>I have two decades of experience developing Enterprise applications in various
                            technologies.
                            I am
                            a full stack
                            developer fully capable of carrying out complex projects from the concept phase through
                            architecture design,
                            implementation, and DevOps to maintenance.
                            </p>
                            <p>I am certified Scrum Master and successfully introduced Agile Scrum development in my
                            team.
                            In
                            addition to
                            working as Sr. Developer, i have 12 years of experience as a Software Development
                            Manager.
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
                            deployment, Auto Test and DevOps.
                            </p>
                            <p> My interest outside of work is my Home Theater, Coaching Rec Soccer, Cheer my son at EDP
                            Soccer
                            league, Help
                            out my daughter’s Girl Scout Troop and gardening in spring and summer.
                            </p>
                            <p>Please find my top accomplishments under Portfolio tab and feel free to contact me under
                            contacts
                                tab.</p>
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
