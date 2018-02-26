
import React, { Component } from 'react';
import TodoDetail from './TodoDetail';
import Header from './Header';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskList: [{ task: "Hi", done: false, id: 1 }, { task: "Hello", done: false, id: 2 }],
            checkAllStatus: false,
        }
        // Bind the this context to the handler function
        this.updateChecking = this.updateChecking.bind(this);
    }

    updateChecking = (taskID, taskStatus) => {
        //Updating parent item
        this.state.taskList[taskID].done = taskStatus;
    };

    checkall() {
        // Based on check all status
        //  Toggle the Check all status
        var tfstatus = !this.state.checkAllStatus;

        //this.state.checkAllStatus = !this.state.checkAllStatus;
        this.setState({
            checkAllStatus: !this.state.checkAllStatus,
        });

        // Now Update each task status in task list with "Check"
        this.state.taskList.map((todo) => {
            todo.done = tfstatus;
        });
    }

    render() {
        //Extracting listitems from the list using map 
        var todos = this.state.taskList.map(function (todo) {
            return (
                <li key={todo.id} style={{ listStyleType: "none", border: "none" }} className="list-group-item">
                    <TodoDetail key={todo.id} kavi={todo} updateChecking={this.updateChecking} />
                </li>
            )
        }.bind(this))
        return (
            <div >
                <Header />
                <button type="submit" onClick={this.checkall.bind(this)}>{this.state.checkAllStatus ? 'Unselect All' : 'Select All'}</button>
                <div className="col-md-4 offset-md-3" ></div>
                <div className="col-md-8 offset-md-3" ></div>
                <br />
                <ul className="list-group">
                    {todos}
                </ul>
                <br />
            </div>
        )
    }
}


