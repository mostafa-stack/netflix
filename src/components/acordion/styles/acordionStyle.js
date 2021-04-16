import styled from 'styled-components';

export const AcordionWrapper = styled.section`
text-transform:capitalize;
color:#fff;

h2{
    text-align:center;
    font-size:1.6rem;
}


`;
export const Question = styled.div`
width:50%;
margin:auto;
.block-question{    
    margin:.5rem;
    .question{
        background-color:#333;
        font-weight:600;
        padding:1rem;
        border-bottom:1px solid #000;
        cursor:pointer;
        transition:all .3s ease-in-out;
        :hover{
            background-color:#4e4e4e;
        }
    }
    .answer-container{
        overflow:hidden;
        height:${props => props.toggle? `${props.answerHeight}px`:'0'};
            transition:all .4s ease-in-out;
        .answer{
        background-color:#333;
    line-height:1.6;
    letter-spacing:1.7px;
    padding:.5rem 1rem;
    transform:translateY(${props => props.toggle? '0' : '-100%'});
    transition:all .4s ease-in-out;
    margin:0 !important;
    }
    }
    
}
@media (max-width:600px){
    width:80%;
    .question{
        font-size:1.1rem;
        }
        .answer{
            font-size:.8rem;
        }
}
@media (max-width:900px){
    width:65%;
    
}
`;