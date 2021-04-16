import React, { Component } from 'react';
import jumbotroonItems from '../fixtures/jumbo.json'
import faqs from '../fixtures/faqs.json'
import {firebase } from '../firebase/firebase'
const ProjectContext = React.createContext()
class ProjectProvider extends Component {
    state = {
        jumboItems : [...jumbotroonItems],
        faqs : [...faqs],
    }


    render() {
        console.log(this.state.jumboItems);
        return (
            <ProjectContext.Provider value={{
                ...this.state ,
                setToggleAcordion : this.setToggleAcordion,
                
            }}>
                {this.props.children}
            </ProjectContext.Provider>
        );
    }
}
const ProjectConsumer = ProjectContext.Consumer
export {ProjectProvider , ProjectConsumer}