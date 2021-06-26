import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    const toggleAddTask = () => {
        setShowAddTask(!showAddTask);
    };

    const saveTask = (task) => {
        const id = getNextId();
        const newTask = { id, ...task };

        setTasks([...tasks, newTask]);
        toggleAddTask();
    };

    const getNextId = () => {
        return tasks.length > 0
            ? Math.max.apply(Math, tasks.map((task) => { return task.id; })) + 1
            : 1;
    };

    const toggleReminder = (id) => {
        setTasks(
            tasks.map(
                (task) => task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(
            tasks.filter(
                (task) => task.id !== id
            )
        );
    };

    return (
        <div className='container'>
            <Header showAddTask={ showAddTask } onToggleAddTask={ toggleAddTask } />
            { showAddTask && <AddTask onSaveTask={ saveTask } /> }
            <Tasks tasks={ tasks } onToggle={ toggleReminder } onDelete={ deleteTask } />
        </div>
    );
}

export default App;
