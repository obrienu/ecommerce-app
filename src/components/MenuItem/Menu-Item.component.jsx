import React from 'react';
import './Menu-item.style.scss';

const MenuItem = (props) => {
    const style = {"backgroundImage": `url(${props.image})`}
    return (
        <div className= {`MenuItem ${props.title.toLowerCase()}`} >
            <div className="MenuItemImage"  style={style} ></div>
            <div className="MenuContent">
                <h1 className="title"> {props.title}</h1>
                <span className= "subtitle">{props.subtitle}</span>
            </div>
        </div>
    );
}

export default MenuItem;
