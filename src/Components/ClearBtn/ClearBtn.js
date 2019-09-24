import React from 'react';

import styles from './ClearBtn.module.css';

const clearBtn = props => {
  const button =
    props.tasks.length < 1 ? null : (
      <button className={styles.marginBottom} onClick={props.clear}>
        Clear
      </button>
    );
  return button;
};

export default clearBtn;
