import FunctionalButton from './functionalButton.js';

function NavButton() {
    const handleClick = () => {
        // Define the function to be executed on button click
        console.log('Button clicked!');
        // Add your custom logic here
    };
    return (
        <FunctionalButton className={"NavButton"} onClick={handleClick}>
            <div className='Bar'></div>
            <div className='Bar'></div>
            <div className='Bar'></div>
        </FunctionalButton>
    );
}

export default NavButton;
