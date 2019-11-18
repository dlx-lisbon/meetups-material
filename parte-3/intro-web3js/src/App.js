import React, { Component } from 'react';
/* 1. completar imports */

class App extends Component {

    constructor(props) {
        super(props);
        //
        this.state = {
            totalSupply: '',
            balance: '',
            transferAmount: '',
            transferTo: '',
            /* 2. completar state variables */
        };
    }

    componentDidMount = async () => {
        /* 3. completar loading de smart contracts */
    }

    handleChange = (event) => {
        if (event.target.name === 'amount') {
            this.setState({ transferAmount: event.target.value });
        } else {
            this.setState({ transferTo: event.target.value });
        }
    }

    handleSubmit = (event) => {
        /* 4. completar submit de transação */
        event.preventDefault();
    }

    render() {
        const { totalSupply, balance, transferAmount, transferTo } = this.state;
        return (
            <div>
                <p>Total Supply: {totalSupply} DLX</p>
                <p>Your Balance: {balance} DLX</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        To:
                        <input
                            type="text"
                            name="to"
                            value={transferTo}
                            onChange={this.handleChange}
                            required={true}
                        />
                    </label>
                    <br />
                    <label>
                        Amount:
                        <input
                            type="text"
                            name="amount"
                            value={transferAmount}
                            onChange={this.handleChange}
                            required={true}
                        />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default App;
