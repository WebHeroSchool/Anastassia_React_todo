import React from 'react';
import styles from './Footer.module.css';

const Footer = ({count}) => (<div className={styles.wrap}>
    <p className={styles.text}>Осталось выполнить вот столько дел: {count}</p>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
</div>);

export default Footer;
