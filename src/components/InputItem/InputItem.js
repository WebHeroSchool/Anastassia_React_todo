import React from 'react';
import TextField from '@material-ui/core/TextField';

import styles from './InputItem.module.css';

const InputItem = () => (<div className={styles.wrap}>
    <TextField className={styles.root} id="outlined-basic" label=" Добавь еще важное дело" variant="outlined" />
   </div>);

export default InputItem;
