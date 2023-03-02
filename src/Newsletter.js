import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import validator from 'validator';


export const Newsletter = () => {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);
    const [emailError, setEmailError] = useState('Enter valid Email');
    const [submitted, setSubmitted] = useState(false);
    const [submitComplete, setSubmitComplete] = useState(false);
    const [submitResponse, setSubmitResponse] = useState('');

    const cleanUp = () => {
        setEmail('');
        setSubmitted(false);
        setSubmitComplete(false);
        setSubmitResponse('');
    }

    const handleClose = () => {
        cleanUp();
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        if (validator.isEmail(event.target.value)) {
            setValidated(true);
            setEmailError('');
        } else {
            setValidated(false);
            setEmailError('Enter valid Email')
        }
        setEmail(event.target.value);

    }

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitComplete(true)
            const msg = Math.floor(Math.random() * 10 + 1) > 1 //  fails 1 out of 10 times on average
                ? `The signup process has for ${email} was successful.`
                : `Something went wrong, please try again later.`;
            setSubmitResponse(msg);
        }, 1000)
    }

    return (
        <>
            <Button variant="flat" onClick={handleShow} style={{}}>
                Newsletter Signup
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Newsletter Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {submitted && !submitComplete
                        ? <><Spinner></Spinner> Processing...</>
                        : submitted && submitComplete
                            ? submitResponse
                            :

                            <Form noValidate validated={validated}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" onChange={handleChange} value={email} />
                                    <Form.Text>
                                        {emailError}
                                    </Form.Text>
                                </Form.Group>
                            </Form>}
                </Modal.Body>
                <Modal.Footer>
                    {submitted && submitComplete
                        ? <Button variant="flat" onClick={handleClose}>Close</Button>
                        : <>
                            <Button className="me-auto" variant="danger" onClick={handleClose}>Abort</Button>
                            <Button variant="flat" onClick={handleSubmit} disabled={!validated}>
                                Signup
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Newsletter;