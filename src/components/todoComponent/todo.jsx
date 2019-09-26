import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { bindActionCreators } from 'C:/Users/sensai/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { addItem } from '../../actions/todoActions';

export class todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    }

    updateItem = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    addItem = () => {
        console.log('item:', this.state.item);
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        });
        document.getElementById('todo-input').value=''
    }

    render() {
        return (
            <React.Fragment>
                <div className='wrapper text-center'>
                    <h3 className=''>TODO List</h3>
                    <input id='todo-input' type='text' placeholder='Enter item...' onChange={this.updateItem} />
                    <button onClick={this.addItem}>Add</button>
                    <div>
                        {this.props.todoList.todoList.map((obj, i) => {
                            return (<li key={i}>{obj.item}</li>)
                        })}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state) => {
    console.log('state:', state)
    return {
        todoList: state.todoList
    }
}

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        addItem: addItem
    }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(todo);