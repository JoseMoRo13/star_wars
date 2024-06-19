jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Planets from './components/Planets';
import Spaceships from './components/Spaceships';
import Vehicles from './components/Vehicles';
import People from './components/People';
import Films from './components/Films';
import Species from './components/Species';

const Container = styled.div`
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NavItem = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #555;
  }
`;

const App = () => {
  const [view, setView] = useState('planets');

  const renderView = () => {
    switch (view) {
      case 'planets':
        return <Planets />;
      case 'spaceships':
        return <Spaceships />;
      case 'vehicles':
        return <Vehicles />;
      case 'people':
        return <People />;
      case 'films':
        return <Films />;
      case 'species':
        return <Species />;
      default:
        return <Planets />;
    }
  };

  return (
    <Container>
      <Nav>
        <NavItem onClick={() => setView('planets')}>Planets</NavItem>
        <NavItem onClick={() => setView('spaceships')}>Spaceships</NavItem>
        <NavItem onClick={() => setView('vehicles')}>Vehicles</NavItem>
        <NavItem onClick={() => setView('people')}>People</NavItem>
        <NavItem onClick={() => setView('films')}>Films</NavItem>
        <NavItem onClick={() => setView('species')}>Species</NavItem>
      </Nav>
      {renderView()}
    </Container>
  );
};

export default App;