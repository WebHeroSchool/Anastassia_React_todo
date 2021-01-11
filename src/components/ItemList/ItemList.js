import React from 'react';
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({items}) => (<ul>
    {items.map(item => <li className="text" key={item.value}>
        <Item value={item.value} /></li>
    )}
</ul>);

export default ItemList;
