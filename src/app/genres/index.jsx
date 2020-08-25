import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectGenres,
  getGenres,
  getGenreAndGenres,
  getGenre,
} from "./genreSlice";
import { useRouteMatch, useHistory } from "react-router-dom";
import ArtistsModal from "./artistsModal";
import GenreCards from "./genreCards";
import Loading from "../../components/loading";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
`;

export default function Genres() {
  const { genres, isGetGenresLoading } = useSelector(selectGenres);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();
  const [isArtistsModalOpen, setIsArtistsModalOpen] = useState(
    () => !!match.params.id
  );

  useEffect(() => {
    if (match.params.id) {
      dispatch(getGenreAndGenres(match.params.id));
    } else {
      dispatch(getGenres());
    }
  }, []);

  useEffect(() => {
    if (match.params.id) setIsArtistsModalOpen(true);
    else setIsArtistsModalOpen(false);
  }, [match]);

  const closeArtistsModal = useCallback(() => {
    setIsArtistsModalOpen(false);
    history.push("/genres");
  }, []);

  const genreSelectHandler = useCallback((id) => {
    dispatch(getGenre(id));
    history.push(`/genres/${id}`);
  }, []);

  if (isGetGenresLoading && !match.params.id)
    return (
      <Container data-testid="loading">
        <Loading />
      </Container>
    );

  return (
    <div data-testid="genres">
      <GenreCards genres={genres} onGenreSelect={genreSelectHandler} />
      <ArtistsModal
        isArtistsModalOpen={isArtistsModalOpen}
        onClose={closeArtistsModal}
      />
    </div>
  );
}
