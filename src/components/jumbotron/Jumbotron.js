import React from 'react';
import JumbotronWrapper from './styles/jumbotronStyle'
const Jumbotron = (props) => {
    const {image , title , subTitle , alt , direction} = props.item;
    return (
        <JumbotronWrapper direction={direction}>
            <div className="jumbo-text">
                <h3>{title}.</h3>
                <p>{subTitle}</p>
            </div>
            <div className="jumbo-image">
                <img src={image} alt={alt}/>
            </div>
        </JumbotronWrapper>
    );
}

export default Jumbotron;
