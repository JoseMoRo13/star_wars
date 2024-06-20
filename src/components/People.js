import React from 'react';
import styled from 'styled-components';
import useFetch from '../useFetch';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Title = styled.h1`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #f4f4f4;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  width: 300px;
  text-align: center;
`;

const Planet = () => {
  const { data: planet, loading, error } = useFetch('https://swapi.dev/api/people/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Planets</Title>
      <List>
        {planet.map(planet => (
          <ListItem>
            <p>Nombre: {planet.name}</p>
            <p>Altura: {planet.height}</p>
            <p>Masa: {planet.mass}</p>
            <p>Color de pelo: {planet.hair_color}</p>
            <p>Color de piel: {planet.skin_color}</p>
            <p>Color de ojos: {planet.eye_color}</p>
            <p>Fecha de nacimineto: {planet.birth_year}</p>
            <p>Genero: {planet.gender}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Planet;