import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import styles from './Footer.module.css';

const Footer = ({count}) => (<div className={styles.wrap}>
    <p className={styles.text} >Осталось выполнить вот столько дел: {count}</p>
    <div className={styles.button}>
        <Button variant="contained" color="primary">
            All
        </Button>
        <Button variant="contained" color="primary">
            Active
        </Button>
        <Button variant="contained" color="primary">
            Completed
        </Button>
    </div>
</div>);

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;
