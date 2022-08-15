import React, {useEffect, useState} from "react";
import Button from "./Button";
import Select from 'react-select'
import { useNavigate } from "react-router-dom";
import "./Hello.css"

function Hello() {
    const [userChoice, setUserChoice] = useState({});
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({name: "", role: ""});

    let navigate = useNavigate();

    useEffect(() => {
        fetch("/employees")
            .then(response => response.json())
            .then(data => setEmployees(data.map((employee) => {
                return { value: employee.name, label: employee.name }
            })));
    }, []);

    function handleSubmitEmployee(e) {
        e.preventDefault();
        window.sessionStorage.setItem("user", userChoice.value);
        navigate(`/home`);
    }

    async function submitDataBackend () {
        fetch('/employees', {
            method: 'POST',
            body: JSON.stringify(newEmployee),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(json => setNewEmployee(newEmployee))
    }

    async function handleSubmitNewEmployee(e) {
        e.preventDefault();
        window.sessionStorage.setItem("user", e.target[0].value);
        await submitDataBackend();
        navigate(`/home`);
    }

    return (
        <div className="Form-container">
            <form className="Hello-form" onSubmit={handleSubmitEmployee}>
                <header className="header">Select an Employee</header>
                <Select options={employees} onChange={(choice) => setUserChoice(choice)}/>
                <button type="submit">Submit</button>
            </form>
            <form className="Hello-form" onSubmit={handleSubmitNewEmployee}>
                <header className="header">Or Make a new Employee</header>
                <input
                    type="text"
                    name="employee[name]"
                    value={newEmployee.name}
                    placeholder="name"
                    onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })}
                />
                <input
                    type="text"
                    name="employee[role]"
                    value={newEmployee.role}
                    placeholder="role"
                    onChange={e => setNewEmployee({ ...newEmployee, role: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Hello;