// Header.js

import React from 'react';
import NavButton from '../buttons/navButton.js';
import Title from './title.js';

const Header = ({ toggleNavMenuVisibility }) => {


    return (
        <div className="Header">
            <NavButton onClick={toggleNavMenuVisibility} />
            <Title title="Ciena3840" />
        </div>
    );
}

export default Header;