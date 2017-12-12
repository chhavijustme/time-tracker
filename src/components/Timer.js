import React, {Component} from 'react';
// require("moment-duration-format");

function formatTimeString (timestamp){
    var moment = require('moment');
    moment().format();
    console.log(timestamp);
    console.log(tempTime);
    var z=timestamp;

    var tempTime = moment.duration(z);
    var y = tempTime.hours() + ":" + tempTime.minutes() + ":" + tempTime.seconds();
    console.log(tempTime);
    console.log(y);
    return y;
}

class Timer extends React.Component { render() {

    var moment = require('moment');
    moment().format();

    // var tempTime = moment.duration(this.props.elapsed);
    // var y = tempTime.hours() + ":" + tempTime.minutes() + ":" + tempTime.seconds();
    // console.log(y);
    // console.log(tempTime);


    return (
        <div className='ui centered card'>
            <div className='content'>
                <div className='header'> {this.props.title}
                </div>

                <div className='meta'> {this.props.project}
                </div>

                <div className='center aligned description'>
                    <h2>
                        { formatTimeString(this.props.elapsed) }

                    </h2> </div>
                <div className='extra content'>

                    <span className='right floated edit icon'>
                        <i className='edit icon' />
                    </span>

                    <span className='right floated trash icon'>
                        <i className='trash icon' />
                    </span>

                </div>

            </div>

            <div className='ui bottom attached blue basic button'>
                Start
            </div>
        </div>
    ); }
}

export default Timer;
