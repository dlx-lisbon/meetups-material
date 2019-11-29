## Obrigado

Mais uma vez, obrigado a todos que participaram. Espero que tenham gostado e aprendido algo novo. Este foi o terceiro e ultimo meetup da serie 101-dapp.

## Revisão

Neste terceiro meetup, (utilizado um ambiente virtual tal como foi feito no primeiro e também no segundo meetup), vimos como conectar o frontend a um smart contract. O smart contracto utilizado foi o DLXToken da parte 2 (segundo meetup) e fazendo um link aos ficheiros relativos aos contractos deployed (através de `yarn link-contracts` na pasta "parte-3/intro-web3js"), conectamos o frontend.

Como agradecimento aos primeiros membros do meetup, oferecemos alguns stickers. E [a pedido de muitas familias](apedidodemuitasfamilias.jpg), aqui ficam todos os links relativos aos stickers-
* https://pinata.cloud/
* https://chain.link/
* https://raiden.network/
* https://www.portis.io/
* https://thegraph.com/
* https://3box.io/

Também tivemos umas hardware wallet
* https://trezor.io/
* https://www.ledger.com/

Registem dúvidas que aparecam entretanto e vamos discuti-las no proximo meetup.

Abraço, até a proxima.



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