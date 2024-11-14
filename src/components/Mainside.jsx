import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    grid-area: Mainside;
`

const Mainside = () => {
    return (
        <>
          <Container>
              Middle element
          </Container>
        </>
    );
};

export default Mainside;