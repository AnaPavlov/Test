import React from 'react';

import styles from './Task.module.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const task = props => {
  return (
    <div className={styles.task}>
      <div>
        <input
          type="checkbox"
          defaultChecked={props.status}
          onClick={props.toggleChecked}
        />
        <p>{props.task}</p>
      </div>
      <FontAwesomeIcon
        className={styles.trashIcon}
        onClick={props.click}
        icon={faTrash}
      />
    </div>
  );
};

export default task;
