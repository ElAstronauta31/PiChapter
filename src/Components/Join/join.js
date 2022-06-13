import React from "react";
import { FormDiv, InfoDiv, JoinDiv, InfoInnerDiv, NameDiv, InfoP, TitleDiv, BottomDiv, InformationDiv, SelectDiv, InnerNameDiv,NameInput, EmailInput, InfoH2, InfoUl, FormLabel, EmailDiv, CommentDiv, TextArea, SelectLabel, SelectOptionDiv, SubmitDiv, SubmitInput, SelectA, InterestDiv, FormStyle } from "./joinStyle";

const Join = () => {

    return (
        <JoinDiv>
            <TitleDiv>
                <InterestDiv>
                    <h1>Interest Form</h1>
                </InterestDiv>
                <InformationDiv>
                    <h1>Membership Information</h1>
                </InformationDiv>
            </TitleDiv>
            <BottomDiv>
            <FormDiv>
                <FormStyle>
                    <NameDiv>
                        <InnerNameDiv>
                            <FormLabel for="fname">First Name</FormLabel><br/>
                            <NameInput type="text" id="fname"></NameInput><br/>
                        </InnerNameDiv>
                        <InnerNameDiv>
                            <FormLabel for="lname">Last Name</FormLabel><br/>
                            <NameInput type="text" id="lname"></NameInput><br/>
                        </InnerNameDiv>
                    </NameDiv>
                    <EmailDiv>
                        <FormLabel for="email">Email</FormLabel><br/>
                        <EmailInput type="text" id="email"></EmailInput><br/>
                    </EmailDiv>
                    <SelectDiv>
                        <SelectOptionDiv>
                            <SelectLabel for="edu">Education</SelectLabel><br/>
                            <SelectA id="edu">
                                <option selected disabled>Select</option>
                                <option>Freshman</option>
                                <option>Sophmore</option>
                                <option>Junior</option>
                                <option>Senior</option>
                                <option>Graduate</option>
                                <option>Other</option>
                            </SelectA>
                        </SelectOptionDiv>
                        <SelectOptionDiv>
                            <SelectLabel for="col">College/University</SelectLabel><br/>
                            <SelectA id="col">
                                <option selected disabled>Select</option>
                                <option>Rochester Institute of Technology</option>
                                <option>University of Rochester</option>
                                <option>Nazareth College</option>
                                <option>St. John Fisher</option>
                                <option>SUNY Geneseo</option>
                                <option>Other</option>
                            </SelectA>
                        </SelectOptionDiv>
                        <SelectOptionDiv>
                            <SelectLabel for="gpa">GPA</SelectLabel><br/>
                            <SelectA id="gpa">
                                <option selected disabled>Select</option>
                                <option>Below 2.75</option>
                                <option>Above 2.75</option>
                                <option>Other</option>
                            </SelectA>
                        </SelectOptionDiv>
                    </SelectDiv>
                    <CommentDiv>
                        <FormLabel>Additional Comments</FormLabel><br/>
                        <TextArea rows="10"  cols="74" id="comment" maxLength="200"></TextArea><br/>
                    </CommentDiv>
                    <SubmitDiv>
                        <SubmitInput type="button"  value="Submit" />
                    </SubmitDiv>
                </FormStyle>
            </FormDiv>
            <InfoDiv>
                <InfoInnerDiv>
                    <InfoH2>Eligibility</InfoH2>
                    <InfoP>
                        Any male student enrolled in an accredited 
                        four year college or university may seek 
                        membership in a undergraduate entity provided
                        that he:
                    </InfoP>
                    <InfoUl>
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
                    </InfoUl>
                </InfoInnerDiv>
                <InfoInnerDiv>
                    <InfoH2>New Member Process</InfoH2>
                    <InfoP>
                        Provided that all requirements stated above are met, the candidate will:
                    </InfoP>
                    <InfoUl>
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
                    </InfoUl>
                </InfoInnerDiv>
                <InfoInnerDiv>
                    <InfoH2>Membership Responsibilities</InfoH2>
                    <InfoP>
                        Once a candidate completes the eight (8) 
                        week New Member Induction Process they 
                        will be expected to: 
                    </InfoP>
                    <InfoUl>
                        <li>
                            Pay $150 semester brother dues as an undergraduate member
                        </li>
                        <li>
                            Attend semesterly Leadership Training Institutes (LTI)
                        </li>
                        <li>
                            Attend out bi-annual National Convention
                        </li>
                    </InfoUl>
                </InfoInnerDiv>
            </InfoDiv>
            </BottomDiv>
        </JoinDiv>
    );
};

export default Join;