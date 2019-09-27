import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/userActions';
// import { incrementCounter } from './actions/productActions';
import { incrementCounter } from './actions/counterActions';
import { decrementCounter } from './actions/counterActions';
import { bindActionCreators } from 'redux';
import { createBrowserHistory } from 'history';

export class App extends Component {
  
  constructor(props) {
    super(props);
    const history = createBrowserHistory();
    this.state = {
      username: ''
    }
  }

  onUpdateUser = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  updateUserName = () => {
    this.props.onUpdateUser(this.state.username)
  }

  incCount = () => {
    console.log(this.props.counterVal)
    this.props.upCount(this.props.counterVal);
  }

  decCount = () => {
    this.props.downCount(this.props.counterVal);
  }

  navigateToTodo = () => {
    this.props.history.push('/todo')
  }

  render() {
    // console.log('props:', this.props);
    const { user, counterVal } = this.props;
    return (
      <React.Fragment>
        <span class='navigate-todo' onClick={this.navigateToTodo}>Go To TODO List</span>
        <div>
          <input type="text" onChange={this.onUpdateUser} placeholder="Enter user name" />
          <button onClick={this.updateUserName}>Update</button>
          <p>Hi {user}</p>
        </div>
        <div>
          <button onClick={this.incCount}>Up</button><span>(Increased after 4sec delay introduxed by saga async)</span>
          <p>Counter:{counterVal}</p>
          <button onClick={this.decCount}>Down</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('props:', props);
  return {
    user: state.user,
    counterVal: state.counterVal,
    inputProps: props.randomProps
  }

};

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    onUpdateUser: updateUser,
    upCount: incrementCounter,
    downCount: decrementCounter
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(App);
