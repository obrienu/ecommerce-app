import React from 'react';
import './custom.button.style.scss'

const CustomButton = ({children, color, onClick, ...otherProps}) => {
    return (
        <div className="Button">
            <button 
                className = {`btn btn-${color} button`}
                {...otherProps}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}

export default CustomButton;
