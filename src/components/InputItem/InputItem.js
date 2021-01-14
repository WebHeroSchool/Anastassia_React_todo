import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import styles from './InputItem.module.css';


const InputItem = () => (<div className={styles.wrap}>
    <TextField className={styles.root} id="standard-basic" label="Добавь еще важное дело" />
   </div>);

// export default InputItem;
export default withStyles(styles)(InputItem);

