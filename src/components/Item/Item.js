import React from 'react';
import PropTypes from 'prop-types';

import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {withStyles} from "@material-ui/core/styles";

const styles = {
    done: {
        textDecoration: 'line-through',
        color: 'dimgray'
    }
};

class Item extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() => console.log('Утечка памяти'), 1000);
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('componentDidUpdate');
    // }
    //
    componentWillUnmount() {
       clearInterval(this.timerID);
    }

    render() {
        const {value, isDone, classes, onClickDone, id, onClickDelete} = this.props;

        return (<ListItem fullWidth>
            <Checkbox
                defaultChecked
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}

                checked={isDone}
                tabIndex={-1}
                onClick={() => onClickDone(id)}
            />
            <ListItemText primary={value} classes={{
                root: isDone && classes.done
            }} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                    <DeleteIcon onClick={() => onClickDelete(id)}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>);
    }
}

Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    onClickDone: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    onClickDelete: PropTypes.func.isRequired
};

export default withStyles(styles) (Item);
