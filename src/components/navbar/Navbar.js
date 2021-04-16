import React from 'react';
import styled from 'styled-components'
import Logo from '../../logo.svg'
const Navbar = () => {
    return (
        <Container>
            <img src={Logo} className='logo' alt="netflix"/>
            <button className='signin'>sign in</button>
        </Container>
    );
}

export default Navbar;
const Container = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
padding:1rem 3rem;

.logo{
    width:8rem;
    height:4rem;
}
.signin{
    background-color:#c50000;
    padding:.5rem 1rem;
    border:none;
    border-radius:3px;
    color:#fff;
    font-size:1rem;
    text-transform:capitalize;
    cursor:pointer;
}

@media (max-width:800px){
    padding:1rem 2rem;
    
    .logo{
        width:5rem;
        height:2.5rem;
    }
}
@media (max-width:600px){
    padding:.5rem 1rem;
    .signin{
        padding:.5rem;
        font-size:.8rem;
    }
    .logo{
        width:3.5rem;
        height:1.5rem;
    }
}
`;