import React from 'react';
import { BodyDiv, MissionDiv, QuoteDiv, MissionP, Hold2, QuoteP, QuoteH3, TitleDiv, TitleH2, Hold } from './bodyStyle';
import Quotes from './quotes';

const Body = () => {
    return (
        <BodyDiv>
            <Hold2>
                <TitleDiv>
                    <TitleH2>
                        Our Mission
                    </TitleH2>
                    <TitleH2>
                        Distinguished Quotes
                    </TitleH2>
                </TitleDiv>
            </Hold2>
            <Hold>
                <MissionDiv>
                    <MissionP>
                        Phi Iota Alpha Fraternity is committed to the development of professional leaders through
                        shared experiences and fostered lifelong brotherhood. These men continuously promote the
                        ideals of Pan Americanism via intellectual dialogue, cultural awareness, and community
                        service.
                    </MissionP>
                </MissionDiv>
                <QuoteDiv>
                    <Quotes />
                </QuoteDiv>
            </Hold>
        </BodyDiv>
    );
};

export default Body;

{/* <QuoteP>
                        We are free, but not to be evil, not to be indifferent to human suffering, not to profit 
                        from the people, from the work created and sustained through their spirit of political 
                        association, while refusing to contribute to the political state that we profit from.
                    </QuoteP>
                    <QuoteH3>
                        - Don José Martí
                    </QuoteH3> */}