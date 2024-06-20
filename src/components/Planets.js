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
        {planets.map(planets => (
          <ListItem>
            <p>Nombre: {planets.name}</p>
            <p>Rotación: {planets.rotation_period}</p>
            <p>Periodo orbital: {planets.orbital_period}</p>
            <p>Diemetro: {planets.diameter}</p>
            <p>Clima: {planets.climate}</p>
            <p>Gravedad: {planets.gravity}</p>
            <p>Terreno: {planets.terrain}</p>
            <p>Superficie: {planets.surface_water}</p>
            <p>Poblecion: {planets.population}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Planets;