import React from 'react';
import { useSelector } from 'react-redux';
import { BrotherNameDiv, BroH2, BrothersDiv, QuoteH3, HighlightDiv, BroHighDiv, NameDiv, NameH2, Brother1Div, BroImg, Brother2Div, Brother2P, Brother1P, ImgDiv, BroInfoDiv } from './highlightStyle';
import piLion from '../../../siteContent/piLion.jpg'

const Highlight = () => {

    const brothers = useSelector(state => state.brothers.brothers);
    
    const random = () => {
        return Math.floor(Math.random() * brothers.length)
    }
    
    const brother1 = random();
    const brother2 = random(); 


    return (
        <HighlightDiv>
            <BroHighDiv>
                Brother Highlight
            </BroHighDiv>
            <BrothersDiv>
                <BrotherNameDiv>
                    <NameDiv>
                        <NameH2>
                            Don {brothers[brother1].brotherName} 
                        </NameH2>
                    </NameDiv>
                    <Brother1Div>
                        <ImgDiv>
                            <BroImg src={piLion}></BroImg>
                        </ImgDiv>
                        <BroInfoDiv>
                            {
                                brothers[brother1].semesterYear.charAt(0) === 'S' 
                                ? <BroH2>{`Spring ${brothers[brother1].semesterYear.charAt(3)}${brothers[brother1].semesterYear.charAt(4)}${brothers[brother1].semesterYear.charAt(5)}${brothers[brother1].semesterYear.charAt(6)}`}
                                </BroH2>
                                : <BroH2>{`Fall ${brothers[brother1].semesterYear.charAt(2)}${brothers[brother1].semesterYear.charAt(3)}${brothers[brother1].semesterYear.charAt(4)}${brothers[brother1].semesterYear.charAt(5)}`}
                                </BroH2>
                            }
                            <BroH2>{brothers[brother1].firstName} {brothers[brother1].lastName}</BroH2>
                        </BroInfoDiv>
                    </Brother1Div>
                </BrotherNameDiv>
                <BrotherNameDiv>
                    <NameDiv>
                        <NameH2>
                            Don {brothers[brother2].brotherName}
                        </NameH2>
                    </NameDiv>
                    <Brother1Div>
                        <ImgDiv>
                            <BroImg src={piLion}></BroImg>
                        </ImgDiv>
                        <BroInfoDiv>
                            {
                                brothers[brother2].semesterYear.charAt(0) === 'S' 
                                ? <BroH2>{`Spring ${brothers[brother2].semesterYear.charAt(3)}${brothers[brother2].semesterYear.charAt(4)}${brothers[brother2].semesterYear.charAt(5)}${brothers[brother2].semesterYear.charAt(6)}`}
                                </BroH2>
                                : <BroH2>{`Fall ${brothers[brother2].semesterYear.charAt(2)}${brothers[brother2].semesterYear.charAt(3)}${brothers[brother2].semesterYear.charAt(4)}${brothers[brother2].semesterYear.charAt(5)}`}
                                </BroH2>
                            }
                                <BroH2>{brothers[brother2].firstName} {brothers[brother2].lastName}</BroH2>
                        </BroInfoDiv>
                        
                        
                    </Brother1Div>
                </BrotherNameDiv>
                
            </BrothersDiv>
        </HighlightDiv>
    );
};

export default Highlight;