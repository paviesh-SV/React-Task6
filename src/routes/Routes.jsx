import React from "react";
import Dashboard from '../components/Dashboard.jsx'
import FormCreate from "../components/FormCreate.jsx"
import FormEdit from "../components/FormEdit.jsx"
import { Navigate } from 'react-router-dom'

//Specifying routes of links
const AppRoutes = [
    {
        path: "/",
        element: <Dashboard />,
        exact: true
    },

    {
        path: "/formcreate",
        element: <FormCreate />,
        exact: true
    },

    {
        path: "/formedit/:id",
        element: <FormEdit />,
        exact: true
    },
    
    {
        path: "*",
        element: <Navigate to="/" />,
        exact: false
    }
]

export default AppRoutes