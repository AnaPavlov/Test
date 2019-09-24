import React from 'react';
import Task from './Task/Task.js';

const tasks = props => {
  return props.tasks.map((task, index) => {
    return (
      <Task
        key={Math.random().toString(36).slice(2)}
        task={task.task}
        click={props.click.bind(this, index)}
        toggleChecked={props.toggleChecked.bind(this, index)}
        status={task.isChecked}
      />
    );
  });
};

export default tasks;
