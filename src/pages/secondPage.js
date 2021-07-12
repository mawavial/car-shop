import React, { useState } from "react";
import ImageContainer from "../components/imageContainer";
import ImageLargeContainer from "../components/imageLargeContainer";
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  backgroundcolor: black;
  display: inline-block;
`;

const SecondPage = ({ imageThumb, imageLarge }) => {
  const [open, setOpen] = useState(false);

  let handleClick = () => {
    console.log("clique");
    setOpen(true);
  };

  let handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ImageContainer src={imageThumb} alt="image" onClick={handleClick} />
      {open ? (
        <Container onclick={handleClose}>
          <ImageLargeContainer src={imageLarge} alt="large_image" open={open} />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default SecondPage;
