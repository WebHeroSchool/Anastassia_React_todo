import React from 'react';
import Item from "../Item/Item";

const ItemList = ({todoItem}) => (<ul>
    <li><Item todoItem={todoItem} /></li>
    <li><Item todoItem={'Протестировать приложение'}/></li>
    <li><Item todoItem={'Добавить приложение в портфолио'}/></li>
</ul>);

export default ItemList;
