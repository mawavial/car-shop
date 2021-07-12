import styled from "styled-components";

const ImageLargeContainer = styled.img`
  height: 100vh;
  width: 100vw;
  position: fixed;
  flex: 1;
  backgroundcolor: black;
  visibility: ${(props) => props.open};
  background-color: black
`;

export default ImageLargeContainer;
