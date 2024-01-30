import PropTypes from 'prop-types';

const FunctionalButton = ({ onClick, className, children }) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

FunctionalButton.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,

};

export default FunctionalButton;