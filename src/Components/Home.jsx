import React from 'react';
import styled from 'styled-components';
import Teams from './Teams.jsx';
import Sponsors from './Sponsors.jsx';
import EngagementSection from './Engagment.jsx';
import Content from './Content.jsx';
import Information from './Information.jsx';
import AnimatedTile from './AnimatedTile.jsx';

const MainContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
`;

const Section = styled.section`
    margin: 0;
    &:last-child {
        margin-bottom: 8rem; // Extra space before footer
    }

    &:not(:first-child) {
        margin-top: 6rem;
    }
`;

const SpacedEngagement = styled(Section)`
    padding: 4rem 0;
    background: rgba(251, 191, 36, 0.1);
    margin: 8rem -33.33%; // Negative margin to extend background full-width
    padding-left: 33.33%;
    padding-right: 33.33%;
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
