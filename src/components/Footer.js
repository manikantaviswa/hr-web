import React from 'react';

export const Footer = (props) => {
    const { footer } = props; 
    return (
        <div className="footer">
            <p>{footer}</p>
        </div>
    )
};
