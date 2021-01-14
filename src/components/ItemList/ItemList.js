import React from 'react';
import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({items}) => (
        <ul>
            {items.map(item => <ol className={styles.text} key={item.value}>
                <Item value={item.value} isDone={item.isDone} /></ol>
            )}
        </ul>);

export default ItemList;
