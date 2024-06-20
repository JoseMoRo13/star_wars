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
  text-align: left;
`;

const Films = () => {
  const { data: films, loading, error } = useFetch('https://swapi.dev/api/films/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <Container>
      <Title>Films</Title>
      <List>
        {films.map(film => (
          <ListItem>
            <p>Titulo: {film.title}</p>
            <p>Episodio: {film.episode_id}</p>
            <p>Apertura: {film.opening_crawl}</p>
            <p>Director: {film.director}</p>
            <p>Productor: {film.producer}</p>
            <p>Fecha de lanzamiento: {film.release_date}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Films;