import React, { useState } from "react";
import axios from "axios";
import "../styles/menstrual-cycle-form.css";
import { useNavigate } from "react-router-dom"

function MenstrualCycleForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        // flowStartDate: "",
        flowEndDate: "",
        cycleStartDate: "",
        cycleEndDate: "",
        password:""
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }


    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post("http://localhost:8080/lady/create", formData)
            .then((response) => {
                const ladyId = response.data.id;
                console.log("Menstrual cycle data submitted successfully: ", response);
                navigate(`/cycles/${ladyId}`);
            })
            .catch((error) => {
                console.error("Failed to submit menstrual cycle data: ", error);
            });
    }

    return (
        <>
        <h1 className="head">My Menstruation Calendar</h1>
        <form className="menstrual-cycle-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
            />

            {/*<label htmlFor="flow-start-date">Flow Start Date:</label>*/}
            {/*<input*/}
            {/*    type="date"*/}
            {/*    id="flow-start-date"*/}
            {/*    name="flowStartDate"*/}
            {/*    value={formData.flowStartDate}*/}
            {/*    onChange={handleInputChange}*/}
            {/*    required*/}
            {/*/>*/}


            <label htmlFor="cycle-start-date">Cycle Start/Flow Start Date:</label>
            <input
                type="date"
                id="cycle-start-date"
                name="cycleStartDate"
                value={formData.cycleStartDate}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="flow-end-date">Flow End Date:</label>
            <input
                type="date"
                id="flow-end-date"
                name="flowEndDate"
                value={formData.flowEndDate}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="cycle-end-date">Cycle End Date:</label>
            <input
                type="date"
                id="cycle-end-date"
                name="cycleEndDate"
                value={formData.cycleEndDate}
                onChange={handleInputChange}
                required
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default MenstrualCycleForm