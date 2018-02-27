import React, { Component } from 'react';

export default class TodoDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.kavi.done,
        }
    }
   // Rerendering child components with new data
    componentWillReceiveProps(nextProps) {
        this.setState({ isChecked: nextProps.kavi.done });
    }
    toggleCheckboxChange(e) {
        // Updating local changes first and then inform your parent
        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));
        //Strike-through Feature
        if (e.target.checked == true) {
            e.currentTarget.labels[0].style.textDecoration = 'line-through';
            e.currentTarget.labels[0].style.textDecorationColor = 'red';
        } else {
            e.currentTarget.labels[0].style.textDecoration = '';
            e.currentTarget.labels[0].style.textDecorationColor = '';
        }
        // Update parent
        this.props.updateChecking(this.props.kavi.id, this.state.isChecked);
    }

    render() {
        return( 
         <div>
               <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleCheckboxChange.bind(this)} /> &nbsp;&nbsp;
              <span style={{'textDecoration' : this.state.isChecked ? 'line-through' : 'none'}}>  {this.props.kavi.task}</span>
     </div>
        )
    }
}
