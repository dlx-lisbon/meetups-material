import React, { useEffect, useState } from 'react';
import { ethers, Wallet } from 'ethers';
import {
    Box,
    Button,
    Heading,
    MetaMaskButton,
    Form,
    Input,
    Field,
    Flex,
} from 'rimble-ui';


function App() {
    const [loggedin, setLoggedin] = useState<boolean>(false);
    const [validated, setValidated] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const validateForm = () => {
        // Perform advanced validation here
        if (inputValue.length > 0) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    };

    const validateInput = (e: any) => {
        e.target.parentNode.classList.add("was-validated");
    };

    const handleInput = (e: any) => {
        setInputValue(e.target.value);
        validateForm();
        validateInput(e);
    };

    const handleSubmit = (e: any) => {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();

        // Sign a text message
        let signPromise = signer.signMessage(inputValue)

        signPromise.then((signature) => {

            // Flat-format
            console.log(signature);
            // "0xea09d6e94e52b48489bd66754c9c02a772f029d4a2f136bba9917ab3042a0474
            //    301198d8c2afb71351753436b7e5a420745fed77b6c3089bbcca64113575ec3c
            //    1c"

            // Expanded-format
            console.log(ethers.utils.splitSignature(signature));
            // {
            //   r: "0xea09d6e94e52b48489bd66754c9c02a772f029d4a2f136bba9917ab3042a0474",
            //   s: "0x301198d8c2afb71351753436b7e5a420745fed77b6c3089bbcca64113575ec3c",
            //   v: 28,
            //   recoveryParam: 1
            //  }

            // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/cryptography/ECDSA.sol


            let signingAddress = ethers.utils.verifyMessage(inputValue, signature);

            console.log(signingAddress);
            // "0x14791697260E4c9A71f18484C9f997B308e59325"

            console.log(ethers.utils.hashMessage(inputValue));
        });
        e.preventDefault();
    };

    const handleLoginMetamask = () => {
        (window as any).ethereum.enable().then(() => {
            setLoggedin(true);
        });
    }

    const notLogged = () => (
        <MetaMaskButton.Outline onClick={handleLoginMetamask}>
            Connect with MetaMask
        </MetaMaskButton.Outline>
    );

    const ui = () => (
        <div>
            <Heading as={"h1"}>Assinaturas</Heading>
            <Flex>
                <Box p={3} width={1 / 2}>
                    <Heading as={"h2"}>Assinar</Heading>
                    <Form onSubmit={handleSubmit}>
                        <Field label="Mensagem" validated={validated} width={1}>
                            <Input
                                type="text"
                                required // set required attribute to use brower's HTML5 input validation
                                onChange={handleInput}
                                value={inputValue}
                                width={1}
                            />
                        </Field>
                        <Button type="submit" disabled={!validated}>
                            Assinar Mensagem
                        </Button>
                    </Form>
                </Box>
                <Box p={3} width={1 / 2}>
                    {/* <Heading as={"h2"}>Verificar</Heading>
                    <Form onSubmit={handleSubmit}>
                        <Field label="Mensagem" validated={validated} width={1}>
                            <Input
                                type="text"
                                required // set required attribute to use brower's HTML5 input validation
                                onChange={handleInput}
                                value={inputValue}
                                width={1}
                            />
                        </Field>
                        <Button type="submit" disabled={!validated}>
                            Assinar Mensagem
                        </Button>
                    </Form> */}
                </Box>
            </Flex>
        </div>
    );

    return loggedin ? ui() : notLogged();
}

export default App;
