import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Moment from 'moment';

function Task({ task, onToggle, onDelete }) {
    return (
        <div className={ task.reminder ? 'task reminder' : 'task' } onDoubleClick={ () => onToggle(task.id) }>
            <h3>
                { task.subject }
                <FaTimes
                    style={{ color: 'steelBlue', cursor: 'pointer' }}
                    onClick={ () => onDelete(task.id) }
                />
            </h3>
            <p>
                { Moment(task.taskDate).format('ddd, D MMMM YYYY') + ' at ' + Moment(task.taskDate).format('h:mma') }
            </p>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.object,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func,
};

export default Task;
