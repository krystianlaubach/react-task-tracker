import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function AddTask({ onSaveTask }) {
    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [taskDate, setTaskDate] = useState(new Date());
    const [reminder, setReminder] = useState(false);

    const onSubjectChange = (event) => {
        setSubject(event.target.value);

        if (subject.length > -1) {
            setSubjectError('');
        }
    };

    const onDateChange = (date) => {
        setTaskDate(date);
    };

    const onReminderChange = (event) => {
        setReminder(event.currentTarget.checked);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        onSaveTask({ subject, taskDate, reminder });

        resetForm();
    };

    const validate = () => {
        if (subject) {
            setSubjectError('');

            return true;
        }

        setSubjectError('Please enter Task Subject');

        return false;
    };

    const resetForm = () => {
        setSubject('');
        setTaskDate(new Date());
        setReminder(false);
    };

    return (
        <form className='add-form' onSubmit={ onSubmit }>
            <div className='form-control'>
                <label>Task</label>
                <span className='error'>{ subjectError }</span>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={ subject }
                    onChange={ onSubjectChange }
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <div>
                    <DatePicker
                        selected={ taskDate }
                        showTimeSelect
                        timeIntervals={ 15 }
                        dateFormat='dd/MM/yyyy h:mm a'
                        minDate={ new Date() }
                        onChange={ onDateChange }
                    />
                </div>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder?</label>
                <input
                    type='checkbox'
                    value={ reminder }
                    checked={ reminder }
                    onChange={ onReminderChange }
                />
            </div>
            <div>
                <input type='submit' value='Save Task' className='btn btn-block' />
            </div>
        </form>
    );
}

AddTask.propTypes = {
    onSaveTask: PropTypes.func,
};

export default AddTask;
