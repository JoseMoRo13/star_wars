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
  font-size: 47px;
  color: #F4E90D;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
  color: #E7E5E7;
`;

const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  background: #5F5F65;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  width: 200px;
  text-align: left;
`;

const Starships = () => {
  const { data: starships, loading, error } = useFetch('https://swapi.dev/api/starships/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Starships</Title>
      <List>
        {starships.map(starships => (
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
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Starships;