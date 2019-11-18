import React, { Component } from 'react';
import Web3 from 'web3';
import TruffleContract from '@truffle/contract';
import DLXTokenJSON from './contracts/DLXToken.json';

class App extends Component {

    constructor(props) {
        super(props);
        //
        this.state = {
            totalSupply: '',
            balance: '',
            transferAmount: '',
            transferTo: '',
            DLXToken: undefined,
            userAccount: '',
        };
    }

    componentDidMount = async () => {
        const ethereum = window.ethereum;
        await ethereum.enable();
        const web3 = new Web3(ethereum);

        const DLXTokenContract = TruffleContract(DLXTokenJSON);
        DLXTokenContract.setProvider(web3.currentProvider);
        const DLXToken = await DLXTokenContract.deployed();
        //
        const userAccount = (await web3.eth.getAccounts())[0];

        this.setState(
            {
                totalSupply: (await DLXToken.totalSupply()).toString(),
                balance: (await DLXToken.balanceOf(userAccount)).toString(),
                DLXToken,
                userAccount,
            }
        );
    }

    handleChange = (event) => {
        if (event.target.name === 'amount') {
            this.setState({ transferAmount: event.target.value });
        } else {
            this.setState({ transferTo: event.target.value });
        }
    }

    handleSubmit = (event) => {
        const { DLXToken, transferAmount, transferTo, userAccount } = this.state;
        DLXToken.transfer(transferTo, transferAmount, { from: userAccount });
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
