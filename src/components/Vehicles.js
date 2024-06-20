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
  width: 250px;
  text-align: center;
`;

const Vehicles = () => {
  const { data: vehicles, loading, error } = useFetch('https://swapi.dev/api/vehicles/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Veiculos</Title>
      <List>
        {vehicles.map(vehicles => (
          <ListItem>
            <p>Nombre: {vehicles.name}</p>
            <p>Modelo: {vehicles.model}</p>
            <p>Manufactura: {vehicles.manufacturer}</p>
            <p>Costo: {vehicles.cost_in_credits}</p>
            <p>Tamaño: {vehicles.length}</p>
            <p>Velocidad Atmosfera: {vehicles.max_atmosphering_speed}</p>
            <p>Tripulación: {vehicles.crew}</p>
            <p>Pasageros: {vehicles.passengers}</p>
            <p>Capacidad de carga: {vehicles.cargo_capacity}</p>
            <p>Alimentación: {vehicles.consumables}</p>
            <p>Clase de veículo: {vehicles.vehicle_class}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Vehicles;