import React, { useState } from 'react';

import Header from './components/header/header.js';
import NavMenu from './components/header/NavMenu.js';
import CanvasWrapper from './components/canvas/canvasWrapper.js';

function App() {
    const [navMenuVisible, setNavMenuVisible] = useState(false);

    const toggleNavMenuVisibility = () => {
        setNavMenuVisible(!navMenuVisible);
    };

    return (
        <div className="App">
            <Header toggleNavMenuVisibility={toggleNavMenuVisibility} ></Header>
            <NavMenu isVisible={navMenuVisible} />
            <CanvasWrapper></CanvasWrapper>

        </div>

    );
}

export default App;
