import React, {Component} from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends React.Component{

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    };


    createTimer = () => {
      const t = {
          title: "",
          project: "",
          id: ""
      }
      
      this.setState ({
          timers: this.state.timers.concat(t),
      });
    };

    state = {

        timers: [
            {
             title : 'Read Medium',
             project: 'Author dreams',
             id: 1,
             elapsed: 5456099,
             runningSince: Date.now(),
            },

            {
              title: 'Watch Crown',
              project: 'Netflix and Chill',
              id: 2,
              elapsed: 1273998,
              runningSince: null,

            },
        ],
    };

   render(){
       return(
           <div className ='ui three column centered grid'>
               <div className = 'column'>
                   <EditableTimerList
                   timers={this.state.timers}
                   />
                   <ToggleableTimerForm
                   onFormSubmit = {this.handleCreateFormSubmit}
                   />
               </div>
           </div>
       );
   }
}

export default TimersDashboard;