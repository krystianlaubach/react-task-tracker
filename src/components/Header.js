import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, showAddTask, onToggleAddTask }) {
    return (
        <header className='header'>
            <h1>{ title }</h1>
            <Button
                colour={ showAddTask ? 'steelBlue' : 'green' }
                text={ showAddTask ? 'Close' : 'Add' }
                onClick={ onToggleAddTask }
            />
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker',
};

Header.propTypes = {
    title: PropTypes.string,
    showAddTask: PropTypes.bool,
    onToggleAddTask: PropTypes.func,
};

export default Header;
