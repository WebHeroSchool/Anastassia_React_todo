import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';

import styles from './InputItem.module.css';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        errorMessage: '',
        isError: false
    };

    onButtonClick = () => {
        if (this.state.inputValue !== '') {
            this.setState({
                inputValue: '',
                errorMessage: '',
                isError: false
            });
            this.props.onClickAdd(this.state.inputValue);
        } else {
            this.setState({
                errorMessage: 'Ошибка! Поле пустое. Добавьте дело.',
                isError: true
            })
        }
    };

    changeToUppercase = event => {
        this.setState({ inputValue: event.target.value.toUpperCase()});
    };

    render() {
        // const { onClickAdd } = this.props;

        return (<div className={styles.wrap}>
            <TextField
                id="standard-basic"
                label="Добавь еще важное дело"
                fullWidth
                margin={'dense'}
                helperText={this.state.errorMessage}
                value={this.state.inputValue}
                onChange={this.changeToUppercase}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={this.onButtonClick}>
                Добавить
            </Button>
        </div>);
    }
}



export default InputItem;
// export default withStyles(styles)(InputItem);

