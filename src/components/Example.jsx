import React from 'react';
class Example extends React.Component {
    constructor(props) {
        super(props)
        this.State = { count: 0 }

    }

    render() {
        return (
            <div>
                <p>you clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}> click me</button>
            </div>
        );
    };
};

export default Example;