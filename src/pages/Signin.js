import React from 'react';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import styled from 'styled-components/macro'

const Signin = () => {
    return (
        <>
        <Header>
            <SigninWrapper>
                <h2>sign in</h2>
                <form action="">
                    <input type="text"/>
                    <input type="password" name="userPassword" id=""/>
                    <button type="submit">sign in</button>
                </form>
            </SigninWrapper>
        </Header>
        <Footer />
        </>
    );
}

export default Signin;
const SigninWrapper = styled.div`
width:80%;
background:#000;
opacity:.7;
border-radius:.5rem;
padding:2rem;
text-transform:capitalize;
h2{
    color:#fff;
    text-align:left;
    font-size:1.8rem;
}
input{
    width:100%;
    padding:.5rem;
    font-size:1.2rem;
    margin-bottom:1rem;
    background-color:#333;
    border:none;
    border-radius:3px;
    color:#fff;
}
button{
    margin:2rem 0 1rem;
    padding:.7rem;
    width:100%;
    font-weight:600;
    font-size:1.1rem;
    background-color:#e50914;
    border-radius:3px;
    border:none;
    color:#fff;
    cursor:pointer;
}

@media (min-width:500px){
    width:70%;
}
@media (min-width:600px){
    width:50%;
}

@media (min-width:800px){
    width:40%;
}

@media (min-width:1000px){
    width:30%;
}
`