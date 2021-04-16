import React from 'react';
import JumbotronContainer from '../components/jumbotron/JumbotronContainer'
import Footer from '../components/footer/Footer'
import AcordionContainer from '../components/acordion/acordionContainer'
import Header from '../components/header/Header'
import styled from 'styled-components/macro'
import SearchForm from '../components/acordion/SearchForm'
const Home = () => {
    return (
        <>
        <Header>
            <Container className="header-text">
                <h1 className="header-heading">Unlimited movies, TV shows, and more.</h1>
                <p >Watch anywhere. Cancel anytime.</p>
            </Container>
            <SearchForm/>
        </Header>
        <JumbotronContainer/>
        <AcordionContainer/>
        <Footer />
        </>
    );
}

export default Home;
const Container = styled.section`
.header-text{
    width:90%;
    text-transform:capitalize;
    color:#fff;
    .header-heading{
        font-size:1.8rem;

    }
}

@media (min-width:600px){
    .header-text{
    width:70%;
    text-transform:capitalize;
    color:#fff;
    .header-heading{
        font-size:2.4rem;
    }
};
}
@media (min-width:800px){
    .header-text{
    width:50%;
    text-transform:capitalize;
    color:#fff;
    .header-heading{
        font-size:2.8rem;
    }
}
}
`; 