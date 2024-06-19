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

const Planets = () => {
  const { data: planets, loading, error } = useFetch('https://swapi.dev/api/people/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Planets</Title>
      <List>
        {planets.map(planets => (
          <ListItem>
            <p>Nombre: {planets.name}</p>
            <p>Altura: {planets.height}</p>
            <p>Masa: {planets.mass}</p>
            <p>Color de pelo: {planets.hair_color}</p>
            <p>Color de piel: {planets.skin_color}</p>
            <p>Color de ojos: {planets.eye_color}</p>
            <p>Fecha de nacimineto: {planets.birth_year}</p>
            <p>Genero: {planets.gender}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Planets;