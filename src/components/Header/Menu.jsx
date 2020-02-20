import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ title, url }) => {
    const active = {
        color: '#3498db'
    };
    return (
        <li>
            <NavLink exact={url === '/'} to={url} activeStyle={active}>{title}</NavLink>
        </li>
    );
};

export default Menu;