import React from "react";
import { FormDiv, InfoDiv, JoinDiv } from "./joinStyle";

const Join = () => {

    return (
        <JoinDiv>
            <div>
                <div>
                
                </div>
                <div>

                </div>
            </div>
            <FormDiv>
                <form>
                    <div>
                        <div>
                            <label for="fname">First Name</label><br/>
                            <input type="text" id="fname"></input><br/>
                        </div>
                        <div>
                            <label for="lname">Last Name</label><br/>
                            <input type="text" id="lname"></input><br/>
                        </div>
                    </div>
                    <div>
                        <label for="email">Email</label><br/>
                        <input type="text" id="email"></input><br/>
                    </div>
                    <div>
                        <label for="edu">Education</label><br/>
                        <select id="edu">
                            <option>1</option>
                            <option>2</option>
                        </select>

                        <label for="col">College/University</label><br/>
                        <select id="coll">
                            <option>1</option>
                            <option>2</option>
                        </select>

                        <label for="gpa">GPA</label><br/>
                        <select id="gpa">
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                    <div>
                        <label for="comment">Additional Comments</label><br/>
                        <textarea rows="5"  cols="50" id="fname" defaultValue="Comment Here"></textarea><br/>
                    </div>
                    <div>
                        <input type="button"  value="Submit" />
                    </div>
                </form>
            </FormDiv>
            <InfoDiv>
                <div>
                    <h2>Eligibility</h2>
                    <p>
                        Any male student enrolled in an accredited 
                        four year college or university may seek 
                        membership in a undergraduate entity provided
                        that he:
                    </p>
                    <ul>
                        <li> 
                            Is in good academic standing with a cumulative grade point 
                            average of no less than 2.75 on a 4.0 grade point scale
                        </li>
                        <li>
                            Is a full-time student taking courses
                            leading to his first academic degree
                        </li>
                        <li>
                            Has successfully completed one semester or two quarters
                            of a regular year's program
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>New Member Process</h2>
                    <p>
                        Provided that all requirements stated above are met, the candidate will:
                    </p>
                    <ul>
                        <li>
                            Submit a Membership Application consisting of both 
                            short and open-ended questions regarding a candidates 
                            academic, professional, and personal experience
                        </li>
                        <li>
                            Submit a $300 non-refundable Membership Application fee
                        </li>
                        <li>
                            Undergo an interview with your local chapter
                            and a member of the national leadership team
                        </li>
                        <li>
                            Successfully complete an eight (8) week New Member Induction Process
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>Membership Responsibilities</h2>
                    <p>
                        Once a candidate completes the eight (8) 
                        week New Member Induction Process they 
                        will be expected to: 
                    </p>
                    <ul>
                        <li>
                            Pay $150 semester brother dues as an undergraduate member
                        </li>
                        <li>
                            Attend semesterly Leadership Training Institutes (LTI)
                        </li>
                        <li>
                            Attend out bi-annual National Convention
                        </li>
                    </ul>
                </div>
            </InfoDiv>
        </JoinDiv>
    );
};

export default Join;