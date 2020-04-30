import React, { useState } from 'react';
import { ethers } from 'ethers';
import {
    Box,
    Button,
    Heading,
    MetaMaskButton,
    Form,
    Input,
    Field,
    Flex,
    Text,
} from 'rimble-ui';


function App() {
    const [loggedin, setLoggedin] = useState<boolean>(false);
    const [inputMessage, setInputMessage] = useState<string>('');
    const [signatureResult, setSignatureResult] = useState<string>('');
    const [inputMessageVerification, setInputMessageVerification] = useState<string>('');
    const [inputSignatureVerification, setInputSignatureVerification] = useState<string>('');
    const [verificationSignResult, setVerificationSignResult] = useState<string>('');

    const validateInput = (e: any) => {
        e.target.parentNode.classList.add("was-validated");
    };

    const handleInput = (e: any) => {
        switch (e.target.name) {
            case 'message': {
                setInputMessage(e.target.value);
                break;
            }
            case 'messageVerification': {
                setInputMessageVerification(e.target.value);
                break;
            }
            case 'signatureVerification': {
                setInputSignatureVerification(e.target.value);
                break;
            }
        }
        validateInput(e);
    };

    const handleSubmitSignMessage = (e: any) => {
        const provider = new ethers.providers.Web3Provider((window as any).ethereum);
        const signer = provider.getSigner();
        signer.signMessage(inputMessage)
            .then((signature) => setSignatureResult(signature));
        e.preventDefault();
    };

    const handleSubmitVerificationSign = (e: any) => {
        setVerificationSignResult(
            ethers.utils.verifyMessage(inputMessageVerification, inputSignatureVerification),
        );
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
                    <Form onSubmit={handleSubmitSignMessage}>
                        <Field label="Mensagem" validated={true} width={1}>
                            <Input
                                type="text"
                                name="message"
                                required // set required attribute to use brower's HTML5 input validation
                                onChange={handleInput}
                                value={inputMessage}
                                width={1}
                            />
                        </Field>
                        <Button type="submit" disabled={false}>
                            Assinar Mensagem
                        </Button>
                    </Form>
                    <Text>{signatureResult}</Text>
                </Box>
                <Box p={3} width={1 / 2}>
                    <Heading as={"h2"}>Verificar</Heading>
                    <Form onSubmit={handleSubmitVerificationSign}>
                        <Field label="Mensagem" validated={true} width={1}>
                            <Input
                                type="text"
                                name="messageVerification"
                                required // set required attribute to use brower's HTML5 input validation
                                onChange={handleInput}
                                value={inputMessageVerification}
                                width={1}
                            />
                        </Field>
                        <Field label="Assinatura" validated={true} width={1}>
                            <Input
                                type="text"
                                name="signatureVerification"
                                required // set required attribute to use brower's HTML5 input validation
                                onChange={handleInput}
                                value={inputSignatureVerification}
                                width={1}
                            />
                        </Field>
                        <Button type="submit" disabled={false}>
                            Assinar Mensagem
                        </Button>
                    </Form>
                    <Text>{verificationSignResult}</Text>
                </Box>
            </Flex>
        </div>
    );

    return loggedin ? ui() : notLogged();
}

export default App;
