import React from 'react';
import { AboutUsDiv, AboutUsUl, MissionDiv, MissionFactsDiv, PillarDiv, PillarImg, PillarsDiv, PillarsMainDiv, PillarRow, PillarColumn, DonH3, NameH3, FactsDiv, Lista, PillarH2 } from './AboutUsStyle';
import SimonBolivar from '../../siteContent/pillars/SimonBolivar.png';
import JosedeSanMartin from '../../siteContent/pillars/JosedeSanMartin.png';
import BenardoOHiggins from '../../siteContent/pillars/BenardoOHiggins.png';
import BenitoJuarez from '../../siteContent/pillars/BenitoJuarez.png';
import JoseMarti from '../../siteContent/pillars/JoseMarti.png';



const AboutUs = () => {

    return (
        <AboutUsDiv id= "whoweare">
            <MissionFactsDiv>
                <MissionDiv>
                    <h2>Our Mission</h2>
                    <p>
                    Phi Iota Alpha Fraternity is committed to the development of 
                    professional leaders through shared experiences and fostered 
                    lifelong brotherhood. These men continuously promote the 
                    ideals of Pan Americanism via intellectual dialogue, cultural 
                    awareness, and community service. 
                    </p>
                </MissionDiv>
                <FactsDiv>
                    <AboutUsUl>
                        <li><Lista>Name:</Lista> Phi Iota Alpha Fraternity, Inc</li>
                        <li><Lista>Chapter: </Lista>Pi</li>
                        <li><Lista>Nickname:</Lista> Phiota</li>
                        <li><Lista>Established:</Lista> December 26, 1931</li>
                        <li><Lista>Founding School:</Lista> Rensselaer Polytechnic Institute</li>
                        <li><Lista>Fraternal Symbol: </Lista>Lion</li>
                        <li><Lista>Fraternal Flower:</Lista> Red Carnation</li>
                        <li><Lista>Official Colors:</Lista> Gold, Navy Blue, Red and White</li>
                        <li><Lista>Motto:</Lista> "Semper Parati, Semper Juncti"</li>
                        <li><Lista>National Philanthropy:</Lista> National Hispanic Institute</li>
                    </AboutUsUl>
                </FactsDiv>
            </MissionFactsDiv>
            <PillarsMainDiv>
                <PillarH2>Our Fraternal Pillars</PillarH2>
                <PillarsDiv>
                    <PillarRow>
                        <PillarColumn>
                            <PillarDiv> 
                                <PillarImg src= {SimonBolivar}></PillarImg>
                                <DonH3>Don </DonH3>
                                <NameH3>Simón Bolívar</NameH3>
                            </PillarDiv>
                        </PillarColumn>
                        <PillarColumn>
                            <PillarDiv>
                                <PillarImg src= {JosedeSanMartin}></PillarImg>
                                <DonH3>Don</DonH3>
                                <NameH3>José de San Martín</NameH3>
                            </PillarDiv>
                        </PillarColumn>
                    </PillarRow>
                    <PillarRow>
                        <PillarColumn>
                            <PillarDiv>
                                <PillarImg src= {BenardoOHiggins}></PillarImg>
                                <DonH3>Don</DonH3>
                                <NameH3>Bernardo O'Higgins</NameH3>
                            </PillarDiv>
                        </PillarColumn>
                        <PillarColumn>
                            <PillarDiv>
                                <PillarImg src= {BenitoJuarez}></PillarImg>
                                <DonH3>Don</DonH3>
                                <NameH3>Benito Juarez</NameH3>
                            </PillarDiv>
                        </PillarColumn>
                    </PillarRow>
                    
                    <PillarDiv>
                        <PillarImg src= {JoseMarti}></PillarImg>
                        <DonH3>Don</DonH3>
                        <NameH3>José Martí</NameH3>
                    </PillarDiv>
                </PillarsDiv>
            </PillarsMainDiv>
        </AboutUsDiv>
    );
};

export default AboutUs;