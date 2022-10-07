import React from "react"
import { useSelector, useDispatch } from "react-redux";
import piLion from "../../siteContent/piLion.jpg";
import { BroH1, BroH2, BroH2Div, BroImg, BroImgDiv, BrotherGridDiv, BrotherItemDiv, BrothersDiv } from "./BrothersStyle";

export const Brothers = () => {
    const brothers = useSelector(state => state.brothers.brothers);
    const dispatch = useDispatch();
    
    return (

        <BrothersDiv>
            <div>
                <BroH1>Pi Chapter Brothers</BroH1> 
            </div>
           
            <BrotherGridDiv>
                {brothers.map((brother) => (
                    <BrotherItemDiv>
                        <BroImgDiv>
                            <BroImg src={piLion}></BroImg>
                        </BroImgDiv>
                        <BroH2Div>
                             {
                            brother.semesterYear.charAt(0) === 'S' 
                            ? <BroH2>{`Spring ${brother.semesterYear.charAt(3)}${brother.semesterYear.charAt(4)}${brother.semesterYear.charAt(5)}${brother.semesterYear.charAt(6)}`}
                              </BroH2>
                            : <BroH2>{`Fall ${brother.semesterYear.charAt(2)}${brother.semesterYear.charAt(3)}${brother.semesterYear.charAt(4)}${brother.semesterYear.charAt(5)}`}
                              </BroH2>
                            }
                            <BroH2>{brother.firstName} {`"${brother.brotherName}"`} {brother.lastName}</BroH2>
                        </BroH2Div>
                    </BrotherItemDiv>
                ))}

            </BrotherGridDiv>

        </BrothersDiv>

    )
}