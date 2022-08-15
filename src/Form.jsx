import BookingPicker from "./BookingPicker";
import Button from "./Button";
import "./Form.css"
import {useEffect, useState} from "react";

function Form() {
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(window.sessionStorage.getItem("user"));
    }, []);
    async function handleSubmit (e) {
        e.preventDefault();
        fetch(`/employees/byName/${user}`)
            .then(res => res.json())
            .then(data => console.log(JSON.stringify({ bookingDate: e.target[0].value, employee: data.id})));
            // .then(data =>
            //     fetch('/bookings', {
            //     method: 'POST',
            //     body: JSON.stringify({ booking_date: e.target[0].value, employee_id: data.id}),
            //     headers: { 'Content-Type': 'application/json' },
            // })
            //     .then(res => res.json()))
    }
    return (
        <form className="Form" onSubmit={handleSubmit}>
            <header className="header">Pick a date</header>
            <div className="Form-container">
                <BookingPicker />
                <div style={{marginLeft: "2rem"}}>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Form;