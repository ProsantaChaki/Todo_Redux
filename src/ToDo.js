import React,{Component} from 'react';
import AddList from "./components/AddList";
import List from "./components/List";
import { connect } from 'react-redux';
import * as actionTypes from './redux/actions';


import './App.css';

class ToDo extends Component {
    render() {
        return (
            <div>
                <AddList itemAdded={this.props.addedItem}/>
                {this.props.itm.map(items => (
                    <List
                        key={items.id}
                        name={items.name}
                        clicked={() => this.props.onRemovedItem(items.id)}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itm: state.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onAddedPerson: (name, age) => dispatch({type: actionTypes.ADD_PERSON,personData:{name:name, age:age}}),

        addedItem: (name) => dispatch({ type:'ADD_TO_DO' , name:name}),
        // onRemovedItem: (id) => dispatch({type: actionTypes.DELETE_TO_DO, Id: id})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDo);