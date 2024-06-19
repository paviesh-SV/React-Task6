import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { URL } from "../App.jsx";
import NavBar from './NavBar.jsx';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

function FormEdit() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [suite, setSuite] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [phone, setPhone] = useState("")
    const [website, setWebsite] = useState("")
    const [companyName, setCompany] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [bs, setBs] = useState("")

    // funtion to edit some already existing details
    const handleEdit = async() => {
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

            let response = await axios.put(`${URL}/${id}`, data)
            if (response.status === 200) {
                navigate("/");
                toast.success("Edited Data Succcssfully");
            }
        }
        catch (error) {
            toast.danger("Failed to Edit Data")
            console.log(error);
        }
    }

    //function to get specific existing user details from the URL
    const getUserDataById = async () => {
        try {
            let response = await axios.get(`${URL}/${id}`)
            if (response.status === 200) {
                setName(response.data.name);
                setUsername(response.data.username);
                setEmail(response.data.email);
                setStreet(response.data.street);
                setSuite(response.data.suite);
                setCity(response.data.city);
                setZipcode(response.data.zipcode);
                setPhone(response.data.phone);
                setWebsite(response.data.website);
                setCompany(response.data.companyName);
                setCatchPhrase(response.data.catchPhrase);
                setBs(response.data.bs);
            }
        }
        catch (error) {
            toast.error("Error");
            console.log(error);
        }
    }

    useEffect(() => {
        getUserDataById();
    }, [])

    return <>
            {/* Form created to map the appropraite keys to the value being edited */}
            <div className='container-fluid'>
                <NavBar />
                <div className='fromWrapper'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" value={username} placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' value={email} placeholder="Enter Email" onChange={(e) => { setEmail(e.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Label>Address</Form.Label>

                            <Form.Group as={Col}>
                                <Form.Control type="text" value={suite} placeholder='Enter Suite' onChange={(e) => { setSuite(e.target.value) }} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control type="text" value={street} placeholder='Enter Street' onChange={(e) => { setStreet(e.target.value) }} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control type="text" value={city} placeholder='Enter City' onChange={(e) => { setCity(e.target.value) }} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Control type="number" value={zipcode} placeholder='Enter Zipcode' onChange={(e) => { setZipcode(e.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" value={phone} placeholder="Enter Phone Number" onChange={(e) => { setPhone(e.target.value) }} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="text" value={website} placeholder="Enter Website" onChange={(e) => { setWebsite(e.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Label>Company</Form.Label>
                            <Form.Group as={Col}>
                                <Form.Control type="text" value={companyName} placeholder='Enter Company Name' onChange={(e) => { setCompany(e.target.value) }} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control type="text" value={catchPhrase} placeholder='Enter Catch Phrase' onChange={(e) => { setCatchPhrase(e.target.value) }} />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control type="text" value={bs} placeholder='Enter bs' onChange={(e) => { setBs(e.target.value) }} />
                            </Form.Group>
                        </Row>

                        <Button variant="dark" onClick={()=>handleEdit()}>Submit</Button>
                    </Form>
                </div>
            </div>
        </>
    
}

export default FormEdit