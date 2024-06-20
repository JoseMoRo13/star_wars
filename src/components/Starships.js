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

const Starships = () => {
  const { data: starships, loading, error } = useFetch('https://swapi.dev/api/starships/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Starships</Title>
      <List>
        {planets.map(starships => (
          <ListItem>
            <p>Nombre: {starships.name}</p>
            <p>MOdelo: {starships.model}</p>
            <p>Manufactura: {starships.manufacturer}</p>
            <p>Costo: {starships.cost_in_credits}</p>
            <p>Longitud: {starships.length}</p>
            <p>Atmosfera: {starships.max_atmosphering_speed}</p>
            <p>Tripulación: {starships.crew}</p>
            <p>Pasageros: {starships.passengers}</p>
            <p>Capacidad: {starships.cargo_capacity}</p>
            <p>Alimentos: {starships.consumables}</p>
            <p>Impulso: {starships.hyperdrive_rating}</p>
            <p>MGLT: {starships.MGLT}</p>
            <p>Clase de Nave: {starships.starship_class}</p>
            <p>Pilotos: {starships.pilots}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Starships;