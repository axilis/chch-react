import React, { Component } from 'react';

class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: []
        };

        this.click = this.click.bind(this);
    }

    click() {
        this.setState((prevState, props) => {
            return {
                key: [...prevState.key, props.newKey]
            };
        });
        this.props.onClick();
    }

    render() {
        return (
            <div>
                <button onClick={this.click}>Add new items</button>
                <br />
                {this.state.key.map(x => ` ${x} `)}
            </div>
        );
    }
}

export default State;
