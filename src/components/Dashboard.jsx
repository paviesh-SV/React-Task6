import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar"
import { toast } from "react-toastify";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { URL } from '../App'

// Creating thh main dashborad of the webpage where all the details are present
function Dashboard() {
    const [useData, setUserData] = useState([]);
    let navigate = useNavigate();

    // fetching data from the URl
    const getUserData = async () => {
        try {
            let response = await axios.get(URL)
            if (response.status === 200) {
                setUserData(response.data)
                toast.success("Data retrieved")
            }
        }
        catch (error) {
            toast.error("Data failed to be retrieved")
            console.log(error);
        }
    }

    useEffect(() => {
        getUserData();
    }, [])

    // Creating a function to delete user
    const handleDelete = async (id) => {
        try {
            let response = await axios.delete(`${URL}/${id}`)
            if (response.status === 200) {
                toast.success("data removed");
                getUserData();
            }
        }
        catch (error) {
            toast.error("data removal failed");
            console.log(error);
        }

    }

    return <>
        <NavBar />
        <div>
            {/* Table in the dashbooard to output data */}
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>No</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        useData.map((e, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.username}</td>
                                <td>{e.email}</td>
                                <td>{e.suite}, {e.street}, {e.city}, {e.zipcode}</td>
                                <td>{e.phone}</td>
                                <td>{e.website}</td>
                                <td>
                                    <b>Name:</b> {e.companyName} <br />
                                    <b>Slogan:</b> {e.catchPhrase} <br />
                                    <b>Bs:</b> {e.bs}
                                </td>

                                <td>
                                    <Button variant="info" className="btn-lg" onClick={() => navigate(`/formedit/${e.id}`)}>Edit</Button>
                                </td>
                                <td>
                                    <Button variant='danger' className="btn-lg" onClick={() => handleDelete(e.id)}>Delete</Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    </>

}

export default Dashboard