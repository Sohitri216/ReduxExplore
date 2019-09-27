import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import { bindActionCreators } from 'C:/Users/sensai/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import * as actionCreators from '../../actions/todoActions'

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

    addItem = (e) => {
        if (e.keyCode === 13 || e.keyCode === undefined) {
            this.props.addItem(this.state.item);
            this.setState({
                item: ''
            });
            document.getElementById('todo-input').value = ''
        }

    }

    onCheckedItem = (index) => (e) => {
        this.props.checkedItem(index);
    }

    deleteItem = (index) => () => {
        this.props.deleteItem(index);
    }

    editItem = (index) => () => {
        this.setState({
            item: this.props.todoList.todoList[index].item
        })
        this.props.editItem(index);
    }

    cancelEdit = (index) => () => {
        this.props.cancelEdit(index)
    }

    getEditedValue = (index) => (e) => {
        if (e.keyCode === 13)
            this.props.editListItem(this.state.item, index)
    }

    renderActivity = (index) => {
        return (
            <React.Fragment>
                <button onClick={this.editItem(index)}>Edit</button>
                <button onClick={this.deleteItem(index)}>Del</button>
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className='wrapper text-center'>
                    <h3 className=''>TODO List</h3>
                    <input id='todo-input' type='text' className='input-field' placeholder='Enter item...' onKeyDown={this.addItem} onChange={this.updateItem} />
                    <button className='add-button' onClick={this.addItem}>Add</button>
                    <div className='list-items-container'>
                        {this.props.todoList.todoList.map((obj, i) => {
                            return (
                                <div className='list-wrapper' key={i}>
                                    {obj.edit ?
                                        <React.Fragment>
                                            <input type='text' value={this.state.item} onKeyDown={this.getEditedValue(i)} onChange={this.updateItem} />
                                            <span onClick={this.cancelEdit(i)}>X</span>
                                        </React.Fragment> :
                                        <React.Fragment>
                                            <input type='checkbox' checked={obj.checked} onChange={this.onCheckedItem(i)} />
                                            <li className='list-items'>{obj.item}</li>
                                            {obj.checked ? this.renderActivity(i) : ''}
                                        </React.Fragment>
                                    }

                                </div>
                            )
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
        addItem: actionCreators.addItem,
        checkedItem: actionCreators.checkedItem,
        deleteItem: actionCreators.deleteItem,
        editItem: actionCreators.editItem,
        cancelEdit: actionCreators.cancelEdit,
        editListItem: actionCreators.editListValue

    }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(todo);