import React from 'react';
import styled from 'styled-components';
import useFetch from '../useFetch';

const Container = styled.div`
  display: flex;
  flex-direction:;
  flex-wrap: wrap;
  gap: 5px;
  margin: 20px;
`;

const Title = styled.h1`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const List = styled.ul`
  display: flex;
  flex-direction:;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction:;
  flex-wrap: wrap;
  background: #f4f4f4;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  width: 300px;
  text-align: center;
`;

const People = () => {
  const { data: people, loading, error } = useFetch('https://swapi.dev/api/people/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>People</Title>
      <List>
        {people.map(people => (
          <ListItem>
            <p>Nombre: {people.name}</p>
            <p>Altura: {people.height}</p>
            <p>Masa: {people.mass}</p>
            <p>Color de pelo: {people.hair_color}</p>
            <p>Color de piel: {people.skin_color}</p>
            <p>Color de ojos: {people.eye_color}</p>
            <p>Fecha de nacimineto: {people.birth_year}</p>
            <p>Genero: {people.gender}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default People;