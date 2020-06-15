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
                            <img src="assets\images\Suddu_Profile_Pic_TMO.JPG" alt="Sudar Meruva" height="375" />
                        </div>
                        <div className="col-md-6">
                            <p>DevOps Sr. Manager with extensive experience in Enterprise Tools Development and Operations.
                            Lead development and management of over 50 Enterprise applications and tools that enable the workforce to continuously improve business processes to optimize productivity. Experience building high performing teams - resource planning/scheduling, prioritization, outsourcing, offshore teams, virtual teams, communication.
                            A penchant for driving DevOps and CICD adoption across ESD organization, creating and implementing a fully SOX-Compliant CICD/DevOps process, and taking it through SOX-Compliance reviews, validations, and approval of PwC in 2019. Proven track record in delivering results in a fast-paced cross-functional environment.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <p className="font-weight-bold">Sr. Manager DevOps, T-Mobile USA</p>
                            <p>
                                Manage complex projects, relationships, virtual teams and vendors, and deliver Enterprise IT projects.</p>
                            <p>
                                Written SOWs and negotiated vendor contracts. Authored and executed Velocity based SOW with multiple vendors and successfully being used in the department. Managed 12M$ annual budget for software development</p>
                            <p>
                                Oversaw vendor management, Hardware/software purchasing, software license management, application administration, Team access/security and team training.</p>
                            <p>
                                Created standards and best practices for measuring, improving, and communicating value of IT. Designed dashboards – Scrum velocity, Application Availability, Techdebt progress dashboard</p>
                            <p>
                                Lead monthly datacenter failover (GRDR) of over 100 applications from Polaris to Titan, automated failover scripts for Apps on VM, PCF, DB using Service Now (SNOW).</p>
                            <p>
                                Analysed problem areas in employee training and motivation</p>
                            <p>
                                Coordinate training programs that cultivate and enhance company culture</p>
                            <p>
                                Executed a career growth program for my team - transition senior engineers to Architects and Member of Technical Staff. Program resulted in $60K savings in recruiting cost.</p>
                            <p>
                                Developed and implemented monthly team-building events and employee recognition applications - STAR's and UnSung Hero.</p>
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
