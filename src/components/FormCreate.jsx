import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { URL } from "../App.jsx";
import NavBar from './NavBar.jsx';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

//Funtion to create a form to add new user details
function FormCreate() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [suite, setSuite] = useState("");
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const [companyName, setCompany] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [bs, setBs] = useState("")

    let navigate = useNavigate()

    //funtion to handle creating the details in appropriate kes
    const handleCreate = async () => {
        try {
            let data = {
                name,
                username,
                email,
                street,
                suite,
                city,
                zipcode,
                phone,
                website,
                companyName,
                catchPhrase,
                bs,
                status: false,
            }


            let response = await axios.post(URL, data)
            if (response.status === 201) {
                navigate("/")
                toast.success("Created Data Successfully")
            }
        }
        catch (error) {
            toast.danger("Failed to Create Data")
            console.log(error);
        }
    }

    return <>
        <NavBar />
        <br />

        {/* Form to obatin the details from the user userinput and store in approproate keys */}
        <div className='container-fluid' >
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label className='fw-bold'>Name</Form.Label>
                    <Form.Control type='text' placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>

                <Row className='mb-3'>
                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold">Email</Form.Label>
                        <Form.Control type='email' placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Label className="fw-bold">Address</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder='Enter Suite' onChange={(e) => { setSuite(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder='Enter Street' onChange={(e) => { setStreet(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder='Enter City' onChange={(e) => { setCity(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder='Enter Zipcode' onChange={(e) => { setZipcode(e.target.value) }} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold">Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number" onChange={(e) => { setPhone(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label className="fw-bold">Website</Form.Label>
                        <Form.Control type="text" placeholder="Enter Website" onChange={(e) => { setWebsite(e.target.value) }} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Label className="fw-bold">Company</Form.Label>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder='Enter Company Name' onChange={(e) => { setCompany(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder='Enter Catch Phrase' onChange={(e) => { setCatchPhrase(e.target.value) }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder='Enter bs' onChange={(e) => { setBs(e.target.value) }} />
                    </Form.Group>
                </Row>

                <Button variant="dark" onClick={() => handleCreate()}>
                    Submit
                </Button>
            </Form>
        </div>
    </>

}

export default FormCreate