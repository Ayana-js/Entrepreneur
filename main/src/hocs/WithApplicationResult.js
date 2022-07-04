import React from 'react';

export const WithApplicationResult = ({...props}) => {
    return (  
        <div>
             <img src={props.img} alt=' '/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button className={app.btn_light}>{props.button}</button>
        </div>
    );
};

export default WithApplicationResult;