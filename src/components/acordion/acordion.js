import React , {useState , useRef}from 'react';
import {Question } from './styles/acordionStyle'
const Acordion = (props) => {
        const [toggle , setToggle] = useState(false)
    const {header , body  } = props.item
    const [ansHeight , setAnsHeight] = useState(0)
    const refContainer = useRef(null)
    const getAnswerHeight=()=>{
        return refContainer.current.clientHeight
    }
                    return(
            <Question toggle={toggle} answerHeight={ansHeight}>
                <div className="Questions" >
                    <div className="block-question" >
                        <div className="question" onClick={()=>{setToggle(!toggle);setAnsHeight(getAnswerHeight)}} >
                            <span>{header}</span>
                        </div>
                        <div className="answer-container">
                            <div className="answer" ref={refContainer}>
                                <p>{body}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </Question>
                    );
}

export default Acordion;
