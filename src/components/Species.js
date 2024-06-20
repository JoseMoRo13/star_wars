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

const Species = () => {
  const { data: species, loading, error } = useFetch('https://swapi.dev/api/species/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Species</Title>
      <List>
        {species.map(specie => (
          <ListItem>
            <p>Nombre: {specie.name}</p>
            <p>Clasificación: {specie.classification}</p>
            <p>Designacion: {specie.designation}</p>
            <p>Altura media: {specie.average_height}</p>
            <p>Color de piel: {specie.skin_colors}</p>
            <p>Color de pelo: {specie.hair_colors}</p>
            <p>Color de ojos: {specie.eye_colors}</p>
            <p>Promedio de vida: {specie.average_lifespan}</p>
            <p>Mundo natal: {specie.homeworld}</p>
            <p>Lenguaje: {specie.language}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Species;