import React from "react";
import { Modal, Card, Avatar } from "antd";
import { selectGenres } from "./genreSlice";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import styled from "styled-components";

const { Meta } = Card;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

function ArtistsModal({ isArtistsModalOpen, onClose }) {
  const { selectedGenre, isGetGenreLoading } = useSelector(selectGenres);

  return (
    <Modal
      title="Artists"
      visible={isArtistsModalOpen}
      onCancel={onClose}
      footer={null}
    >
      <Container>
        {isGetGenreLoading ? (
          <Loading />
        ) : (
          selectedGenre.map((artist) => (
            <Card key={artist.id}>
              <Meta
                avatar={<Avatar src={artist.picture_small} />}
                title={artist.name}
              />
            </Card>
          ))
        )}
      </Container>
    </Modal>
  );
}

export default React.memo(ArtistsModal);
