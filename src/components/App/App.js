import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

const App = () => {
    const items = [
            {
                value: 'Написать новое приложение на React'
            },
            {
                value: 'Протестировать приложение'
            },
            {
                value: 'Добавить приложение в портфолио'
            }
    ];

    return (
    <div>
    <h1 style={{color: 'red'}}>Важные дела:</h1>
    <InputItem/>
    <ItemList items={items} />
    <Footer count={3}/>
</div>);
};

export default App;
