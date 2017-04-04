import React, { PureComponent } from 'react';
import Child from './Child';

class Rerender extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            key: []
        };

        this.click = this.click.bind(this);
    }

    componentWillUnmount() {
        console.log('Unmounting');
    }

    click() {
        // this.setState((prevState, props) => {
        //     const key = prevState.key;
        //     key.push(props.newKey);

        //     return { key };
        // });
        this.setState((prevState, props) => ({ key: [...prevState.key, props.newKey] }));
        this.props.onClick();
    }

    render() {
        return (
            <div>
                <button onClick={this.click}>Add new items</button>
                <br />
                {this.state.key.map(x => ` ${x} `)}
                <Child />
            </div>
        );
    }
}

export default Rerender;
