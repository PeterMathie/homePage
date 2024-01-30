import React from 'react';
import FunctionalButton from './functionalButton.js';

function NavButton({ onClick }) {

    return (
        <FunctionalButton className={"NavButton"} onClick={onClick}>
            <div className='Bar'></div>
            <div className='Bar'></div>
            <div className='Bar'></div>
        </FunctionalButton>
    );
}

export default NavButton;
