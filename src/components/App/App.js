import React from 'react';
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import Footer from "../Footer/Footer";

const App = () => (<div>
    <h1 style={{color: 'red'}}>Важные дела:</h1>
    <InputItem/>
    <ItemList/>
    <Footer/>
</div>);

export default App;
