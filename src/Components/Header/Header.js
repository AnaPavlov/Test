import React from 'react';

import styles from './Header.module.css';

const header = props => {
  let reminder = null;
  let unfinishedTasks = 0;
  props.tasks.forEach(task => {
    if (task.isChecked === false) {
      unfinishedTasks++;
    }
  });

  if (unfinishedTasks > 0) {
    const pluralSufix = unfinishedTasks === 1 ? 'thing' : 'things';
    reminder = (
      <p>
        You've got {unfinishedTasks} {pluralSufix} to do
      </p>
    );
  }

  return (
    <div className={styles.header}>
      <h2>Keep yourself organized...</h2>
      <h1>Todo List</h1>
      {reminder}
    </div>
  );
};

export default header;
