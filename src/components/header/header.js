// Header.js

import React from 'react';
import NavButton from '../buttons/navButton.js';
import Title from './title.js';

function Header() {
    return (
        <div className="Header">
            <NavButton />
            <Title title="Peter Mathie EXperience" />
        </div>
    );
}

export default Header;