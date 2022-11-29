import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 30px;
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

const H1 = styled.h1`
  text-align: center;
  margin-top: 5%;
`;

const Button = styled.button`
  width: 20%;
  border-radius: 20px;
  border: 2px solid palevioletred;
  color: black;
  padding: 10px;
  margin-top: 2%;
  font-family: "Roboto", sans-serif;
  font-family: "Goblin One", cursive;
`;

const Inicial = ({ setPantalla }) => {
  return (
    <Container>
      <BgImage src={`lanimg/super.png`} />
      <H1>Echa un vistazo a la historia de nuestro héroe</H1>
      <Button onClick={() => setPantalla(false)}>Empezar</Button>
    </Container>
  );
};

export default Inicial;
