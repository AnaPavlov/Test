import React from 'react';

import styles from './NewTask.module.css';

const newTask = props => {
    return (
        <form className={styles} onSubmit={props.submit}>
          <input name="inpTask" placeholder="enter new task" defaultValue="" required />
          <button type="submit">Add</button>
        </form>
    );
}

export default newTask;