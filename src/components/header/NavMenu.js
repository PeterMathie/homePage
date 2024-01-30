// NavMenu.js

import React from 'react';

const NavMenu = ({ isVisible }) => {

    return (
        <div>
            {isVisible && (
                <div className="NavMenu">
                    This content is visible!
                </div>
            )}
        </div>
    );
};

export default NavMenu;