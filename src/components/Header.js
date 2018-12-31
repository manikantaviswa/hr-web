import React from 'react';

export const Header = (props) => {
    const { title, headerNavItems } = props; 
    return (
        <header className="header">
            <h1 className="page-title">{title}</h1>
            <div className="nav-menu">
                {headerNavItems}
            </div>
        </header>
    )
};
