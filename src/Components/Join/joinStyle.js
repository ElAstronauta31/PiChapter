import styled from "@emotion/styled";

export const JoinDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: space-around;
    font-size: 24px;
    
`;

export const FormDiv = styled.div`
    display: flex;
    align-items: center;
    max-width: 100%;
    padding: 0px 25px;
    margin: 0px auto;
    @media (max-width: 750px) {
        padding: 0px;
    }
`;

export const TitleDiv = styled.div`
    display: flex;
    color: #FFFFFF;
`;

export const InterestDiv = styled.div`
    max-width: 550px;
    flex-direction: column;
    text-align: center;
    margin: auto;
    color: #FFFFFF;
`;

export const InformationDiv = styled.div`
    max-width: 700px;
    text-align: center;
    margin: auto;
    color: #FFFFFF;
`;

export const FormStyle = styled.form`
    max-width: 100%;
    
    @media (max-width: 750px) {
        text-align: center;
    }
`;

export const BottomDiv = styled.div`
    display: flex;
    @media (max-width: 1200px) {
        flex-direction: column;
     }
`;

export const InfoDiv = styled.div`
    display: inline-block;
    max-width: 700px;
    
    margin: 0px auto;
    padding: 0px 25px;
    vertical-align: middle;
`

export const InfoInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width 700px;
    font-size: 18px;
    
`;

export const InfoH2 = styled.h2`
    font-size: 24px;
    color: #BC9306;
    margin: 10px 0px 0px 0px;
`;

export const InfoP = styled.p`
    margin: 0px;
    color: #FFFFFF;
`;

export const InfoUl = styled.ul`
    margin: 0px;
    color: #FFFFFF;
    padding-left: 5em;
    list-style-type: square;
    @media (max-width: 750px) {
        padding-left: 2em;
        margin: 1em;
    }
`;

export const NameDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
    @media (max-width: 750px) {
        flex-direction: column;

    }
`;

export const InnerNameDiv = styled.div`
   
    width: 50%;
    @media (max-width: 750px) {
        width: 100%;
        margin: 10px auto;
    }
`;

export const SelectDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 90%;
    @media (max-width: 750px) {
        flex-direction: column;
        width: 50%;
        
        margin: 0px auto;
    }
`;

export const SelectOptionDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const SubmitDiv = styled.div`
    display: flex;
    justidy-content: space-around;
    max-width: 100%;
    margin-top: 20px;
    @media (max-width: 750px) {
        max-width: 80%;
        
        margin: 20px auto;
    }
`;

export const EmailDiv = styled.div`
    margin-top: 20px;
`;

export const CommentDiv = styled.div`
    margin-top: 20px;
    @media (max-width: 750px) {
        max-width: 75%;
        
        margin: 20px auto;
    }
`;

export const TextArea = styled.textarea`
    resize: none;
    width: 98%;
    height: 150px
`;

export const FormLabel = styled.label`
    color: white;
`;

export const SelectLabel = styled.label`
    color: white;
    text-align: center;
`;

export const NameInput = styled.input`
    max-width: 95%;
    height: 35px;
    font-size: 24px;
    @media (max-width: 750px) {
        max-width: 100%;
    }
`;

export const EmailInput = styled.input`
    width: 98%;
    height: 35px;
    font-size: 24px;
    margin: 0px auto;
    @media (max-width: 750px) {
        max-width: 75%;
    }
`;

export const SubmitInput = styled.input`
    width: 500px;
    height: 100px;
    font-size: 24px;
    background-color: #990C22;
    border-radius: 15px;
    border-style: none;
    color: #FFFFFF;
    margin: auto;
    padding: auto;
    @media (max-width: 750px) {
        max-width: 80%;
    }
`;


export const SelectA = styled.select`
    height: 35px;
    font-size: 18px;
    text-align: center;
`;