import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);

        console.log('Creating child');
    }

    componentDidMount() {
        console.log('Mounting child');
    }

    componentWillUnmount() {
        console.log('Unmounting child');
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Child;
