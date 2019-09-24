import React from 'react';

import styles from './Layout.module.css';

const layout = props => {
  return (
    <div className={styles.Layout}>
      <div className={styles.wrapper}>{props.children}</div>
    </div>
  );
};

export default layout;
