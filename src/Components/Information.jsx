import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: rgba(3, 2, 43, 0.02);
  color: #333;
  overflow-x: hidden;
`;

const Section = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  position: relative;
  scroll-snap-align: start;
  background: rgba(3, 2, 43, 0.02);
`;

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #03022B;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1a1940;
  margin-bottom: 1.5rem;
`;

const Value = styled(motion.div)`
  font-size: 4rem;
  color: #03022B;
  font-weight: bold;
  margin: 1rem 0;
`;

const Information = () => {
  const infoData = [
    {
      title: "Vital Information",
      subtitle: "Africa's Bitcoin Mining Landscape",
      value: "3%",
      description: "Global Hashrate Contribution: As of December 2024, Africa accounts for approximately 3% of the global Bitcoin mining hashrate, with operations primarily powered by renewable energy sources."
    },
    {
      title: "Ethiopia's Bitcoin Mining Statistics",
      value: "2.5%",
      description: "Hashrate Contribution: Ethiopia contributes about 2.5% to the global Bitcoin mining hashrate, making it a significant player in the industry."
    },
    {
      title: "Energy Infrastructure",
      value: "600 MW & 1GW",
      description: "Energy Allocation: Ethiopian Electric Power (EEP) has allocated 600 megawatts (MW) of electricity to Bitcoin mining operations, with plans to increase this to 1 gigawatt (GW)."
    },
    {
      title: "Revenue Generation",
      value: "$55,000,000",
      description: "In the past ten months, Ethiopia has generated over $55 million from Bitcoin mining activities."
    },
    {
      title: "Energy Pricing",
      value: "3.2 cents / kWh",
      description: "The country offers highly competitive electricity rates, averaging around 3.2 cents per kilowatt-hour, attracting numerous mining companies."
    },
    {
      title: "Mining Operations",
      value: "20",
      description: "There are currently 20 registered Bitcoin mining companies in Ethiopia, with 11 actively operational."
    }
  ];

  return (
    <Container>
      {infoData.map((info, index) => (
        <Section key={index}>
          <ContentWrapper
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Title
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2
                }
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {info.title}
            </Title>
            {info.subtitle && (
              <Title
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.3
                  }
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {info.subtitle}
              </Title>
            )}
            <Value
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.4
                }
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {info.value}
            </Value>
            <Description
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.5
                }
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {info.description}
            </Description>
          </ContentWrapper>
        </Section>
      ))}
    </Container>
  );
};

export default Information;
