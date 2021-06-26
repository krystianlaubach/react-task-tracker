import React from 'react';
import PropTypes from 'prop-types';

function Button({ colour, text, onClick }) {
    return (
        <button
            className='btn'
            style={{ backgroundColor: colour }}
            onClick={ onClick }
        >{ text }</button>
    );
}

Button.defaultProps = {
    colour: 'green',
    text: 'Add',
};

Button.propTypes = {
    colour: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
