import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task.js';

function Tasks({ tasks, onToggle, onDelete }) {
    return (
        <div className='tasks'>
            {
                tasks.length > 0
                    ? tasks
                        .sort((task1, task2) => task1.taskDate > task2.taskDate ? 1 : -1)
                        .map((task) => (<Task key={ task.id } task={ task } onToggle={ onToggle } onDelete={ onDelete } />))
                    : 'No Task To Show'
            }
        </div>
    );
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func,
};

export default Tasks;
