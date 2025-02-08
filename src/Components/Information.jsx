import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  color: #1a1a1a;
  padding: 6rem 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #e5e5e5;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  font-size: 1.125rem;
  color: #03022B;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
`;

const StatsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid #03022B;
  padding-left: 1.5rem;
`;

const StatLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #666;
  margin-bottom: 0.25rem;
`;

const Value = styled.div`
  font-size: 2.5rem;
  color: #03022B;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #666;
  margin-top: 1.5rem;
  border-top: 1px solid #e5e5e5;
  padding-top: 1.5rem;
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  color: #03022B;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
`;

const Information = () => {
  const infoData = [
    {
      title: "Africa's Bitcoin Mining Landscape",
      value: "3%",
      label: "Global Hashrate",
      description: "Africa accounts for approximately 3% of the global Bitcoin mining hashrate, with operations primarily powered by renewable energy sources."
    },
    {
      title: "Ethiopia's Bitcoin Mining Statistics",
      value: "2.5%",
      label: "Hashrate Contribution",
      description: "Ethiopia contributes about 2.5% to the global Bitcoin mining hashrate, making it a significant player in the industry."
    },
    {
      title: "Energy Infrastructure",
      value: "600 MW",
      label: "Current Allocation",
      secondValue: "1 GW",
      secondLabel: "Future Target",
      description: "Ethiopian Electric Power (EEP) has allocated 600 megawatts (MW) of electricity to Bitcoin mining operations, with plans to increase this to 1 gigawatt (GW)."
    },
    {
      title: "Revenue Generation",
      value: "$55M",
      label: "10-Month Revenue",
      description: "In the past ten months, Ethiopia has generated over $55 million from Bitcoin mining activities."
    },
    {
      title: "Energy Pricing",
      value: "3.2¢",
      label: "per kWh",
      description: "The country offers highly competitive electricity rates, averaging around 3.2 cents per kilowatt-hour, attracting numerous mining companies."
    },
    {
      title: "Mining Operations",
      value: "20",
      label: "Registered Companies",
      secondValue: "11",
      secondLabel: "Active Operations",
      description: "There are currently 20 registered Bitcoin mining companies in Ethiopia, with 11 actively operational."
    }
  ];

  return (
    <Container>
      <SectionTitle>Bitcoin Mining in Ethiopia</SectionTitle>
      <Grid>
        {infoData.map((info, index) => (
          <Card key={index}>
            <Title>{info.title}</Title>
            <StatsContainer>
              <Stat>
                <StatLabel>{info.label}</StatLabel>
                <Value>{info.value}</Value>
              </Stat>
              {info.secondValue && (
                <Stat>
                  <StatLabel>{info.secondLabel}</StatLabel>
                  <Value>{info.secondValue}</Value>
                </Stat>
              )}
            </StatsContainer>
            <Description>{info.description}</Description>
          </Card>
        ))}
      </Grid>
    </Container>
  );
}

export default Information;
