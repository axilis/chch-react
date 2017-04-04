import React, { Component } from 'react';

const LOGGED_IN = true;

export default function (WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            console.log('Parent HOC mounted.');
        }

        render() {
            if (!LOGGED_IN) return false;

            return (
                <div>
                    <div>Parent div.</div>
                    <WrappedComponent />
                </div>
            );
        }
    }
};
