import React from 'react';
import Card from '../card/card';
import styles from './editor.module.css';

const Editor = ({ orders }) => (
  <div className={styles.editor}>
    {orders.map(order => (
      <Card order={order} />
    ))}
  </div>
);

export default Editor;
