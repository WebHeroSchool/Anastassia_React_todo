import React from 'react';
import PropTypes from 'prop-types';

import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({items, onClickDone, onClickDelete}) => (
        <ul className={styles.ul}>
            {items.map(item => <ol className={styles.text} key={item.id}>
                <Item
                    value={item.value}
                    isDone={item.isDone}
                    id={item.id}
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete}
                />
            </ol>
            )}
        </ul>);

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default ItemList;
