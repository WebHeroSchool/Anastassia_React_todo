import React from 'react';
import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({items}) => (<ul>
    {items.map(item => <li className={styles.text} key={item.value}>
        <Item value={item.value} /></li>
    )}
</ul>);

export default ItemList;
