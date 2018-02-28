
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
                <li key={todo.id} style={{ listStyleType: "none", border: '3px solid #979797;',boxShadow:'7px 7px #75A5B4'}} className="list-group-item">
                    <TodoDetail key={todo.id} kavi={todo} updateChecking={this.updateChecking} />
                </li>
            )
        }.bind(this))
        return (
            <div >
                <Header />
                 <br/>
                <button type="submit"  style={{"marginLeft":'30%',boxShadow:'2px 5px #75A5B4'}} onClick={this.checkall.bind(this)}>{this.state.checkAllStatus ? 'Unselect All' : 'Select All'}</button>
                <br/>
                <ul className="col-md-4 list-group" style={{ "marginLeft":'30%',borderCollapse: 'collapse'}}>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                          <li className="list-group-item" style={{boxShadow:'7px 7px #75A5B4',borderBottom:'3px solid #979797',textAlign:'center'}}>

                            <span><b>Oh, What to do</b> </span>
                          </li>
                    {todos}
                  
                </ul>
                <br />
            </div>
        )
    }
}


