import BookingPicker from "./BookingPicker";
import Nav from "./Nav";
import Button from "./Button";
import "./Form.css"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Form() {
    const [user, setUser] = useState({});

    let navigate = useNavigate();

    useEffect(() => {
        setUser(window.sessionStorage.getItem("user"));
    }, []);
    async function handleSubmit (e) {
        e.preventDefault();
        fetch(`/employees/byName/${user}`)
            .then(res => res.json())
            //.then(data => console.log(JSON.stringify({ bookingDate: e.target[0].value, employee: data.id})));
            .then(data =>
                 fetch('/bookings', {
                 method: 'POST',
                 body: JSON.stringify({ bookingDate: e.target[0].value, employee: data}),
                 headers: { 'Content-Type': 'application/json' },
             })
                 .then(res => res.json()))
            navigate('/bookings');

    }
    return (
        <div>
            <Nav/>
            <form className="Form" onSubmit={handleSubmit}>
                <header className="header">Pick a date</header>
                <div className="Form-container">
                    <BookingPicker />
                    <div style={{marginLeft: "2rem"}}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;