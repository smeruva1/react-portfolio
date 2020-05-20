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
                            <p>Senior Leader in IT with a progressive career in developing large-scale, enterprise business applications and delivering IT solutions. Ability to lead organizations to maximize business ROI from Application development, Business Intelligence/Data Warehousing deployments through aligning design, implementation, and maintenance with best practices. Skilled in managing large teams across onsite, off-shore, and third-party vendor resources.

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
                            <p>Responsibilities:
</p><p> Oversee DevOps teams to develop, test and support critical applications, utilizing the latest technologies and programming methodologies.
</p><p> Recommend new technology directions in collaboration with Design and Enterprise Architecture teams.
</p><p> Lead Enterprise Data warehouse and Business Intelligence strategy
</p><p> Build staffing plans that ensure management and development teams are staffed with skill sets required to enhance existing systems as well as deliver new systems functionality required by the business.
</p><p> Provide input for departmental budgets and work to manage operational and capital expenses to meet budget.
</p><p> Improves the development processes, tools and methodologies used in the development group.
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
