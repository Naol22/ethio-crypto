import React from 'react';
import styled from 'styled-components';
import Teams from './Teams.jsx';
import Sponsors from './Sponsors.jsx';
import EngagementSection from './Engagment.jsx';
import Content from './Content.jsx';
import Information from './Information.jsx';
import AnimatedTile from './AnimatedTile.jsx';
import Description from './Description.jsx';

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
`;

const Section = styled.section`
    margin: 0;
    &:last-child {
        margin-bottom: 0rem; // Extra space before footer
    }

    &:not(:first-child) {
        margin-top: 0rem;
    }
`;


const Home = () => {
    return (
        <>
            {/* <AnimatedTile /> */}
            <MainContainer>
                <Section>
                    <Content />
                </Section>
                <Section>
                    <Sponsors />
                </Section>
                <Section>
                    <Description />
                </Section>
                <Section>
                    <Information />
                </Section>
                <Section>
                    <Teams />
                </Section>
                <Section>
                    <EngagementSection />
                </Section>
            </MainContainer>
        </>
    );
}

export default Home;
