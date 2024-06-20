import React, { useState } from 'react';
import styled from 'styled-components';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import People from './components/People';
import Films from './components/Films';
import Species from './components/Species';

const Container = styled.div`
  text-align: center;
  background: #181F24;
`;

const Nav = styled.nav`
  padding-top: 20px;
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
    background: #F4E90D;
    color: #181F24;
  }
`;

const App = () => {
  const [view, setView] = useState('planets');

  const renderView = () => {
    switch (view) {
      case 'planets':
        return <Planets />;
      case 'starships':
        return <Starships />;
      case 'vehicles':
        return <Vehicles />;
      case 'people':
        return <People />;
      case 'films':
        return <Films />;
      case 'species':
        return <Species />;
      default:
        return <Species />;
    }
  };

  return (
    <Container>
      <Nav>
        <NavItem onClick={() => setView('planets')}>Planets</NavItem>
        <NavItem onClick={() => setView('starships')}>Starships</NavItem>
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