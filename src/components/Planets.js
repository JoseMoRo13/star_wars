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
  const { data: planets, loading, error } = useFetch('https://swapi.dev/api/planets/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Planets</Title>
      <List>
        {planets.map(planet => (
          <ListItem>
            <p>Nombre: {planet.name}</p>
            <p>Rotacion: {planet.rotation_period}</p>
            <p>Periodo orbital: {planet.orbital_period}</p>
            <p>Diemetro: {planet.diameter}</p>
            <p>Clima: {planet.climate}</p>
            <p>Gravedad: {planet.gravity}</p>
            <p>Terreno: {planet.terrain}</p>
            <p>Superficie: {planet.surface_water}</p>
            <p>Poblecion: {planet.population}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Planets;