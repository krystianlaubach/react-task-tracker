import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='about'>
            <h3>Version 1.0 UI Only</h3>
            <p>
                I am not an author of this app. I have created it for learning purpose based on the <a href='https://youtu.be/w7ejDZ8SWv8' target='_blank' rel='noreferrer'>React JS Crash Course 2021</a> with small amendments.
            </p>
            <p>
                All credits to <a href='https://github.com/bradtraversy' target='_blank' rel='noreferrer'>Brad Traversy</a> from <a href='https://www.youtube.com/c/TraversyMedia/featured' target='_blank' rel='noreferrer'>Traversy Media</a>.
                Original repository <a href='https://github.com/bradtraversy/react-crash-2021' target='_blank' rel='noreferrer'>Task Tracker App</a>.
                This project was bootstrapped with <a href='https://github.com/facebook/create-react-app' target='_blank' rel='noreferrer'>Create React App</a>.
                I have also used <a href='https://github.com/Hacker0x01/react-datepicker' target='_blank' rel='noreferrer'>React Date Picker</a> component and <a href='https://momentjs.com' target='_blank' rel='noreferrer'>Moment.js</a> library.
            </p>
            <h3>My modifications:</h3>
            <ul>
                <li>Use <a href='https://github.com/Hacker0x01/react-datepicker' target='_blank' rel='noreferrer'>React Date Picker</a> instead of text field for Task Day & Time</li>
                <li>Use <a href='https://momentjs.com' target='_blank' rel='noreferrer'>Moment.js</a> for date time formatting</li>
                <li>Sort tasks by date</li>
                <li>Display error above input instead of displaying alert popup</li>
            </ul>
            <p className='go-back'>
                <Link to='/'>Go Back</Link>
            </p>
        </div>
    );
}

export default About;
