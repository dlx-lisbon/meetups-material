import { ethers } from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';
import React, { Component } from 'react';


interface IAppState {
    userSigner: ethers.providers.JsonRpcSigner;
    provider: JsonRpcProvider;
    blockNumber: number;
    userAddress: string;
}
class App extends Component<{}, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            blockNumber: 0,
            provider: undefined as any,
            userAddress: '',
            userSigner: undefined as any,
        };
    }

    /**
     * @ignore
     */
    public async componentDidMount() {
        const url = 'http://localhost:8545';
        const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
        const userSigner = customHttpProvider.getSigner(0);

        // TODO: completar aqui

        // Set provider and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        this.setState({ provider: customHttpProvider, userSigner });
    }

    public render() {
        const { provider, userAddress, blockNumber } = this.state;
        if (!provider) {
            return <div>Loading Web3, accounts, and contract...</div>;
        }
        return (
            <div>
                <h4>Olá, {userAddress}</h4>
                <p>Bloco Atual: {blockNumber}</p>
            </div>
        );
    }
}

export default App;
