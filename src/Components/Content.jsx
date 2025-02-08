import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import night from '../assets/night_addis.jpg';

const HeroSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(3, 2, 43, 0.50) 0%, rgba(3, 2, 43, 0.75) 100%);
    z-index: 1;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto 1.5rem;
  line-height: 1.5;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: -0.01em;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  color: rgba(255, 255, 255, 0.9);
  max-width: 900px;
  margin: 0 auto 2rem;
  line-height: 1.8;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #03022B;
  background: white;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`;

const Content = () => {
  return (
    <HeroSection>
      <BackgroundImage>
        <motion.img
          src={night}
          alt="Night view of Ethiopia"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </BackgroundImage>
      
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Ethiopia's Digital Revolution</Title>
          <Subtitle>
            Pioneering the Future of Blockchain Technology
          </Subtitle>
          <Description>
            Join us in shaping Ethiopia's digital landscape through innovative blockchain solutions, sustainable mining practices, and cutting-edge technology infrastructure.
          </Description>
          <div className='text-3xl font-bold text-white mb-10'>
            March 5-6 | Hyatt Regency, Addis Ababa, Ethiopia
          </div>
          <CTAButton
            href="https://docs.google.com/forms/d/e/1FAIpQLSeWIA8cvHHPG8VMdolI8jvVmwmzzN1XlbVAN3boTNqro0UzXA/viewform?usp=dialog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </CTAButton>
        </motion.div>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Content;
