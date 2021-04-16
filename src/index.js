import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from './global-styles'
import {ProjectProvider} from './context/context'
ReactDOM.render(
    <ProjectProvider>
<GlobalStyles /> 
<App />
</ProjectProvider> 
 ,document.getElementById('root'));
