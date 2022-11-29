import React, { useState } from "react";
import styled from "styled-components";

const GlobalContainer = styled.div`
  width: 100%;
  text-align: center;
  height: 100vh;
`;

const BgImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  bottom: 200;
`;
const Container = styled.div`
  text-align: center;
  margin: 30px;
`;

const ContainerClick = styled.div`
  display: flex;
  padding-top: 20px;
`;

const Click = styled.button`
  height: 70px;
  width: 100%;
  background: #a4a4a4;
  border-radius: 5px;
  border: 2px solid palevioletred;
  color: black;
  padding: 10px;
  margin-bottom: 20px;
`;

const Escena = ({ textos }) => {
  const [boton, setboton] = useState(1);
  const [imagen, setImagen] = useState(1);

  const siguiente = () => {
    if (boton !== textos.length) {
      setboton(boton + 1);
      setImagen(imagen + 1);
    } else if (boton === textos.length) {
      setboton(1);
      setImagen(1);
    }
  };

  const anterior = () => {
    if (boton !== 1) {
      setboton(boton - 1);
      setImagen(imagen - 1);
    } else if (boton === 1) {
      setboton(textos.length);
      setImagen(textos.length);
    }
  };

  const Button = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 20px;
    border: 2px solid palevioletred;
    color: black;
    padding: 10px;
    margin-bottom: 20px;
    background-color: ${(props) =>
      props.value === boton ? "#E31E1E" : "#FFF"};
  `;

  return (
    <>
      <GlobalContainer>
        <BgImage src={`/img/${imagen}.jpg`} />
        <ContainerClick>
          <Click onClick={() => anterior()}>Anterior</Click>
          <Click onClick={() => siguiente()}>Siguiente</Click>
        </ContainerClick>

        <Container>
          {/* {textos.map((texto, index) => (  */}
          <Button key={textos[0].texto} value={1}>
            {textos[0].texto}
          </Button>
          <Button key={textos[1].texto} value={2}>
            {textos[1].texto}
          </Button>
          <Button key={textos[2].texto} value={3}>
            {textos[2].texto}
          </Button>
          <Button key={textos[3].texto} value={4}>
            {textos[3].texto}
          </Button>
          {/* ))}  */}
        </Container>
      </GlobalContainer>
    </>
  );
};

export default Escena;
