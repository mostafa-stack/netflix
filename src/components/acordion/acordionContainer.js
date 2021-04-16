import React  from 'react';
import {ProjectConsumer} from '../../context/context'
import {AcordionWrapper  } from './styles/acordionStyle'
import SearchForm from './SearchForm'
import Acordion from './acordion'
const AcordionContainer = () => {
    return (
        <ProjectConsumer>
            {
                value=>{
                    const { faqs}=value;
                    return(
                <AcordionWrapper  >
                    <h2>frequently asked questions</h2>
                    <div style={{marginBottom:'3rem'}}>
                        {faqs.map(item=> 
                        <Acordion key={item.id} item={item}  />)}
                    </div>
                        
                        <SearchForm />
                </AcordionWrapper>
                    )
                }
            }
        </ProjectConsumer>
    );
}

export default AcordionContainer;
