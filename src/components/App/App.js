import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

const todoItem = 'Написать новое приложение на React';

const App = () => (<div>
    <h1 style={{color: 'red'}}>Важные дела:</h1>
    <InputItem/>
    <ItemList todoItem={todoItem} />
    <Footer count={3}/>
</div>);

export default App;
