import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";

class App extends React.Component {
    render() {
        const items = [
            {
                value: 'Написать новое приложение на React',
                isDone: true
            },
            {
                value: 'Протестировать приложение',
                isDone: false
            },
            {
                value: 'Добавить приложение в портфолио',
                isDone: false
            }
        ];

        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>Важные дела:</h1>
                <InputItem/>
                <ItemList items={items} />
                <Footer count={3}/>
            </div>);
    }
}

export default App;
