import React from 'react';
import './custom.button.style.scss'

const CustomButton = ({children, color, ...otherProps}) => {
    return (
        <div>
            <button 
                className = {`btn btn-${color} button`}
                {...otherProps}
            >
                {children}
            </button>
        </div>
    );
}

export default CustomButton;
