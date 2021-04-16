
import styled from 'styled-components/macro'
const JumbotronWrapper =styled.section`
width:100%;
padding:2rem;
border-bottom:8px solid #222;
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transition:all .3s ease-in-out;
.jumbo-text{
    padding:1.5rem;
    h3{
        color:#fff;
        font-size:1.2rem;

    }
}
.jumbo-image{
    img{
    width:100%;
    }

}
@media  (min-width: 550px){
.jumbo-image{
    img{
    width:70%;
    }

}
}

@media  (min-width: 600px){
    flex-direction:${props=> props.direction};
    text-align:left;
    .jumbo-text{
        h3{
                font-size:1.6rem;
            }
    }
    
.jumbo-image{
    img{
    width:70%;
    }

}
}
@media  (min-width: 768px){
    width:70%;
    margin:0 auto;
    .jumbo-text{
        h3{
            font-size:1.8rem;
        }
    }

}
`
export default JumbotronWrapper