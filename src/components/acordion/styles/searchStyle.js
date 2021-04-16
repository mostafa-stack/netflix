import styled from 'styled-components'


export const SearchWrapper = styled.div`
width: 100%;
.container{
width:80%;
margin:auto;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
transition:all .2s ease-in-out;
input{
padding:1rem ;
font-size:1.2rem;
    border:none;
}
button{
    padding:1rem;
    font-size:1.2rem;
    color:#fff;
    background-color:#c50000;
    border:none;
    cursor:pointer;
}
}
small{
    margin-top:.5rem;
    display:block;
    text-align:center;
    color:#fff;
}
@media (max-width:600px){
    .container{
input{
        width:90%;
        padding:.7rem;
    }
    button{
        margin-top:.5rem;
        padding:.7rem;
    }

    }
    
}
@media (min-width:800px){
.container{
    width:65%;
}

}

@media (min-width:1000px){
    .container{
    width:50%;
    }
    
}
`;
