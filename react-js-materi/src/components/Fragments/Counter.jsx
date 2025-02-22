import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    render() {
        return (
            <div className="flex flex-row gap-2 items-center">
                <h1 className="">{this.state.count}</h1>
                <button
                    className="bg-black text-white p-3"
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                >+</button>
            </div>
        );
    }
}

export default Counter;
