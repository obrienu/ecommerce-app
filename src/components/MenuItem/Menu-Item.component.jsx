import React from 'react';
import {withRouter} from 'react-router-dom';
import './Menu-item.style.scss';

const MenuItem = (props) => {
    const style = {"backgroundImage": `url(${props.image})`}
    return (
        <div 
        className= {`MenuItem ${props.title.toLowerCase()}`} 
        onClick={() => props.history.push(`${props.match.url}${props.title}`)}
        >
            <div className="MenuItemImage"  style={style} ></div>
            <div className="MenuContent">
                <h1 className="title"> {props.title.toUpperCase()}</h1>
                <span className= "subtitle">{props.subtitle}</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem);
