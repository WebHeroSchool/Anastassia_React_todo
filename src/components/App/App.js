import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";
import styles from "./App.module.css";

class App extends React.Component {
    state = {
        items: [
            {
                value: 'Написать новое приложение на React',
                isDone: true,
                id: 1
            },
            {
                value: 'Протестировать приложение',
                isDone: false,
                id: 2
            },
            {
                value: 'Добавить приложение в портфолио',
                isDone: false,
                id: 3
            }
        ],
        count: 3
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};

            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        this.setState({items: newItemList});
    };


    render() {
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>Важные дела:</h1>
                <InputItem/>
                <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                <Footer count={this.state.count}/>
            </div>);
    }
}

export default App;
