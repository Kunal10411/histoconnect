import React from 'react';
import styled from 'styled-components';
import mysorePalaceImage from '../images/MysoreHisto.jpg'; // Import the image

// Styled component for the page container
const Container = styled.div`
  background-image: url(${mysorePalaceImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

// Styled component for the overlay
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay for better readability */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

// Styled component for the button
const StartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MysorePalacePage = () => {
    return (
        <Container>
            <Overlay>
                <h1 style={{ fontFamily: 'Arial', fontSize: '36px', color: '#fff' }}>Mysore Palace</h1>
                <p style={{ margin: '10px 0', fontSize: '18px', color: '#fff' }}>Historical palace located in Mysore, Karnataka, India.</p>
                <p style={{ margin: '10px 0', fontSize: '18px', color: '#fff' }}>Built in 1912, it is one of the most famous tourist attractions in India.</p>
                <StartButton>Start</StartButton>
            </Overlay>
        </Container>
    );
}

export default MysorePalacePage;
