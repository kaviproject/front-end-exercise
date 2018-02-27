
import React, { Component } from 'react';
import TodoDetail from './TodoDetail';
import Header from './Header';


export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskList: [{ task: "My Task", done: false, id: 1 }, { task: "My Task", done: false, id: 2 },{ task: "My Task", done: false, id: 3 }],
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
                <tr key={todo.id} style={{ listStyleType: "none", border: '3px solid black;'}} className="list-group-item">
                    <TodoDetail key={todo.id} kavi={todo} updateChecking={this.updateChecking} />
                </tr>
            )
        }.bind(this))
        return (
            <div >
                <Header />
                 <br/>
                <button type="submit"  style={{"marginLeft":'30%'}} onClick={this.checkall.bind(this)}>{this.state.checkAllStatus ? 'Unselect All' : 'Select All'}</button>
                <br/>
                <table className="col-md-4 list-group" style={{ "marginLeft":'30%',borderCollapse: 'collapse'}}>
                    <tbody>
                         &nbsp;&nbsp;
                    {todos}
                    </tbody>
                </table>
                <br />
            </div>
        )
    }
}


