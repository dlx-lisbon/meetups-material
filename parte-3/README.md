# Para completar

1. completar imports
```javascript
import Web3 from 'web3';
import TruffleContract from '@truffle/contract';
import DLXTokenJSON from './contracts/DLXToken.json';
```

2. completar state variable
```javascript
DLXToken: undefined,
userAccount: '',
```

3. completar state variable
```javascript
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
```

4. completar submit de transação
```javascript
const { DLXToken, transferAmount, transferTo, userAccount } = this.state;
DLXToken.transfer(transferTo, transferAmount, { from: userAccount });
```