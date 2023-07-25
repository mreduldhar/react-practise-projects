import React from 'react';
import AccordionItem from '../accordionItem/AccordionItem';

const Accordion = ({data}) => {
    return (
        <div className='accordion'>
            {
                data.map((element, index)=>(
                    <AccordionItem num={index} title={element.title} text={element.text} key={element.title}/>
                ))
            }
        </div>
    );
};

export default Accordion;