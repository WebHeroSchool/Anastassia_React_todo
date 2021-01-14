import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';

import styles from './Item.module.css';

const Item = ({value, isDone}) => (<div className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>
    <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
    {value}
</div>);

export default Item;
