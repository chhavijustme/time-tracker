import React, {Component} from 'react';
import TimerForm from "./TimerForm";


class ToggleableTimerForm extends Component {
    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false});
    };

    state = {
        isOpen: false,
    };


    render(){
        if(this.state.isOpen) {
            return (<TimerForm
            onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleFormClose}
            />
            );
        } else {
            return(
                <div className='ui basic content center aligned segment'>
                    <button className='ui basic button icon'
                    onClick={this.handleFormOpen}
                    >
                        <i className='plus icon'/>
                    </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;