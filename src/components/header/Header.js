import React from 'react';
import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
const Header = (props) => {
    const {children} = props
    return (
        <div>
            <Navbar/>
            <Container>
                {children}
            </Container>
            
        </div>
    );
}

export default Header;
const Container = styled.section`
width:100%;
background-image: url('/images/misc/home-bg.jpg');
background-size:cover;
background-position:center;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;

`; 