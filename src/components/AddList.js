import React, {Component} from "react";
import './addList.css'

class AddList extends Component{
    state = {
        name: ''
    };
    onNameChangeHandler = (event) =>{
        this.setState(({name:event.target.value}))
    };

    render() {
        return(
            <div className='AddItem'>
                <input type='text' placeholder='Item Name' onChange={this.onNameChangeHandler} value={this.state.name}/>
                <button onClick={()=>this.props.itemAdded(this.state.name)}>Add To Do</button>
            </div>
        )
    }


}
export default AddList;