## Obrigado

Obrigado a tods que participaram. Espero que tenham gostado e aprendido algo novo.

## Revisão

Neste primeiro meetup vimos alguns assuntos básicos de solidity, fizemos deploy numa testnet com o Remix IDE e finalmente criamos um ambiente local.

Para os que participaram e têm esse ambiente local, podem interagir com o mesmo, se tiver o [ganache](https://www.trufflesuite.com/ganache) a trabalhar e fizerem deploy dos contratos com `npx truffle migrate --reset --network development`.

Depois do deploy, faz sentido criar um frontend, que iremos ver no terceiro meetup. Por agora, podem interagir com os contratos utilizando a linha de comandos.

```
$ > npx truffle console --network development
(truffle) > contrato = await MyContract.deployed()
(truffle) > (await contrato.x()).toString()
(truffle) > await contrato.updateX(55)
(truffle) > (await contrato.x()).toString()
```

No lugar de **MyContract** têm de pôr o nome do vosso ficheiro que tem o contrato. Tentem ter apenas um contrato por ficheiro e o contrato com o mesmo nome que o ficheiro.

Registem dúvidas que aparecam entretanto e vamos discuti-las no proximo meetup.

Abraço, até a proxima.