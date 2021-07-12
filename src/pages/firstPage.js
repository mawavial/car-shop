import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loadProducts } from "../redux/thunks";
import { getProducts } from "../redux/selectors";
import SecondPage from "./secondPage";

const Navbar = styled.h1`
  font-size: 2rem;
  height: 5rem;
  color: white;
  margin-top: 0;
  box-shadow: 0 0.7rem 1.4rem grey;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1360px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
  box-sizing: border-box;
  &:before,
  &:after {
    conent: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
`;

const FirstPage = ({ getProducts, startLoadingProducts }) => {
  useEffect(() => {
    startLoadingProducts();

    return () => {
      startLoadingProducts();
    };
  }, []);

  return (
    <>
      <div>
        <Navbar>Car photos</Navbar>
        <Container>
        {getProducts?.images.map((image, index) => (
          <SecondPage key={index} imageThumb={`${image.uri}_2.jpg`} imageLarge={`${image.uri}_27.jpg`} />
        ))}
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  getProducts: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingProducts: () => dispatch(loadProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
