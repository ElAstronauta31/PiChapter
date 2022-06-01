import React from 'react';
import { BodyDiv, MissionDiv, QuoteDiv, MissionP, QuoteH3, TitleDiv, TitleH2, Hold } from './bodyStyle';

const Body = () => {
    return (
        <BodyDiv>
            <div>
                <TitleDiv>
                    <TitleH2>
                        Mission
                    </TitleH2>
                    <TitleH2>
                        Quote of the day
                    </TitleH2>
                </TitleDiv>
            </div>
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
                    <MissionP>
                        We are free, but not to be evil, not to be indifferent to human suffering, not to profit 
                        from the people, from the work created and sustained through their spirit of political 
                        association, while refusing to contribute to the political state that we profit from.
                    </MissionP>
                    <QuoteH3>
                        - Don José Martí
                    </QuoteH3>
                </QuoteDiv>
            </Hold>
        </BodyDiv>
    );
};

export default Body;