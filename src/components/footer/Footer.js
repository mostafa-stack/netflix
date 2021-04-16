import React from 'react';
import styled from 'styled-components/macro'
const footer = () => {
    return (
        <Container>
            <div className="footer-columns">
                <div className="column">
                    <a href='#'>faq</a>
                    <a href='#'>investor relation</a>
                    <a href='#'>ways to watch</a>
                    <a href='#'>coporate information</a>
                    <a href='#'>netflix original</a>
                </div>
                <div className="column">
                    <a href='#'>help center</a>
                    <a href='#'>jobs</a>
                    <a href='#'>terms of use</a>
                    <a href='#'>contact us</a>
                </div>
                <div className="column">
                    <a href='#'>account</a>
                    <a href='#'>redeem gift cards</a>
                    <a href='#'>privacy</a>
                    <a href='#'>speed tests</a>
                </div>
                <div className="column">
                    <a href='#'>media center</a>
                    <a href='#'>buy gift cards</a>
                    <a href='#'>cookie preference</a>
                    <a href='#'>legal notices</a>
                </div>
            </div>
        </Container>
    );
}

export default footer;
const Container = styled.footer`
padding:3rem;
text-align:left;
border-top:8px solid #222;
.footer-columns{
    width:80%;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    .column{
        margin:0 1rem;
        a{
            display:block;
            color:#333;
            margin-bottom:1rem;
            text-decoration:none;
            text-transform:capitalize;
        }
    }
}
@media (max-width: 1000px){
    .footer-columns{
        .column{
            margin-top:2rem;
        }
    }
}
`;