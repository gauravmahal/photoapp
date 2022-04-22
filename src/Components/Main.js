import React, { Component } from "react";
import List from './List';
import Title from './Title';

class Main extends Component {
    render() {
        return <div>
            <Title title={"To Do's"} />
            <List tasks={['Mown the lawn', 'walk the dog']} />
            <List tasks={['house the driveway', 'finish the laundry']} />
        </div>
    }
}

export default Main