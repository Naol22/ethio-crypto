import styled from 'styled-components';
import yellowtilet from '../assets/yellowtilet.svg';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  pointer-events: none;
  z-index: 10;
`;

const Column = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 60px 0;
`;

const LeftColumn = styled(Column)`
  left: 60px;
`;

const RightColumn = styled(Column)`
  right: 60px;
`;

const Tile = styled.img`
  height: 500px;
  width: auto;
  object-fit: contain;
  opacity: 0.8;
`;

const AnimatedTile = () => {
  // Reduced to 2 tiles per side due to much larger size
  const tiles = Array(2).fill(null);

  return (
    <Container>
      <LeftColumn>
        {tiles.map((_, index) => (
          <Tile
            key={`left-${index}`}
            src={yellowtilet}
            alt="Left Yellow Tile"
          />
        ))}
      </LeftColumn>
      <RightColumn>
        {tiles.map((_, index) => (
          <Tile
            key={`right-${index}`}
            src={yellowtilet}
            alt="Right Yellow Tile"
          />
        ))}
      </RightColumn>
    </Container>
  );
};

export default AnimatedTile;
