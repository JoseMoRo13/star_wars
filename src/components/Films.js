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

const Films = () => {
  const { data: filmss, loading, error } = useFetch('https://swapi.dev/api/films/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Films</Title>
      <List>
        {planets.map(planet => (
          <ListItem key={planet.name}>{planet.name}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Films;