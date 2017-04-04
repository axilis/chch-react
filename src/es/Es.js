import React, { Component } from 'react';

class Es extends Component {
    constructor(props) {
        super(props);

        this.state = {
            obj: {}
        };
    }

    click = () => {
        const obj1 = { k1: 1, k2: 2 };
        const obj2 = { k3: 3, k4: 4 };
        const newObj = { ...obj1, ...obj2, k5: 5 };

        this.setState({ obj: newObj });
    }

    render() {
        const { title, ...restProps } = this.props;

        return (
            <div>
                <button onClick={this.click}>Show object spreading</button>
                <br />
                Object spread with state: {JSON.stringify(this.state.obj)}
                <br />
                Object rest with props: {JSON.stringify(restProps)}
            </div>
        );
    }
}

export default Es;
