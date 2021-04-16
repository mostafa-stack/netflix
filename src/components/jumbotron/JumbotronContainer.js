import React from 'react';
import styled from 'styled-components'
import {ProjectConsumer } from '../../context/context'
import Jumbotron from './Jumbotron'
const JumbotronContainer = () => {
    return (
            <ProjectConsumer>
                {
                    value=>{
                        const {jumboItems} = value
                        return(
                            <Container>
                                {jumboItems.map(item =>(
                                    <Jumbotron key={item.id} item={item} />
                                ))}
                            </Container>
                        )
                    }
                }
            </ProjectConsumer>
    );
}

export default JumbotronContainer;
const Container  = styled.section`
width:100%;
`;

