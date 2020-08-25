import React from "react";
import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const Container = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  margin: 2em 0;
`;

function GenreCards({ genres, onGenreSelect }) {
  return (
    <Container>
      {genres.map((genre) => (
        <Card
          key={genre.id}
          onClick={() => onGenreSelect(genre.id)}
          hoverable
          cover={<img alt={genre.name} src={genre.picture_medium} />}
        >
          <Meta title={genre.name} />
        </Card>
      ))}
    </Container>
  );
}

export default React.memo(GenreCards);
