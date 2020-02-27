# geth, block explorer e transações UI

## geth

```json
{
  "config": {
    "chainId": 5777,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0,
    "ethash": {}
  },
  "nonce": "0x0",
  "timestamp": "0x5e559d30",
  "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "gasLimit": "0x47b760",
  "difficulty": "0x00010",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x0000000000000000000000000000000000000000",
  "number": "0x0",
  "alloc": {},
  "gasUsed": "0x0",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"
}
```

Ou gerar ficheiro utilizando `puppeth`.

### Iniciar nó
```bash
$ geth init genesis.json --datadir db_1
$ geth --networkid 5777 --rpc --rpcport 8545 --rpccorsdomain "*" --datadir db_1 console
() > personal.newAccount()
```

Segundo:
```bash
$ geth init genesis.json --datadir db_2
$ geth --networkid 5777 --rpc --rpcport 7545 --rpccorsdomain "*" --port 30304 --datadir db_2 console
# obter peer enode do primeiro nó com comando admin
# copiar enode
() > admin.addPeer(enode-do-primeiro-nó)
```

### Minar
```bash
# tem de existir uma conta base, criada através de personal.newAccount()
() > miner.start()
# para parar
() > miner.stop()
```

## Block Explorer

```bash
$ docker run -p 80:80 -e APP_NODE_URL="http://localhost:8545" alethio/ethereum-lite-explorer
```

## UI

```
// const blockNumber = (parseInt((await customHttpProvider.getBlockNumber()).toString(), 10));
customHttpProvider.on('block', (blockNumber) => {
    customHttpProvider.getBlock(blockNumber).then((block) => {
        block.transactions.forEach((transaction) => {
            customHttpProvider.getTransactionReceipt(transaction).then(console.log);
            customHttpProvider.getTransaction(transaction).then(console.log);
        });
    });
    this.setState({ blockNumber });
});
userSigner.getAddress().then((address) => {
    this.setState({ userAddress: address });
});
```