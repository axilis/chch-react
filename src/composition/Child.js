import React, { Component } from 'react';
import parentHoc from './parentHoc';

class Child extends Component {
    componentDidMount() {
        console.log('Child component mounted.');
    }

    render() {
        return (
            <div>
                Child div.
            </div>
        );
    }
}

export default parentHoc(Child);
