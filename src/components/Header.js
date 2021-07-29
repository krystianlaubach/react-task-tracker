import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

function Header({ title, showAddTask, onToggleAddTask }) {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>{ title }</h1>
            {
                location.pathname === '/' && (
                    <Button
                        colour={ showAddTask ? 'steelBlue' : 'green' }
                        text={ showAddTask ? 'Close' : 'Add' }
                        onClick={ onToggleAddTask }
                    />
                )
            }
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
