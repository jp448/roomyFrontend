import "./BookingsList.css"
import Button from "./Button";
import Nav from "./Nav";
import {useEffect, useState} from "react";

function BookingsList() {
    const [userDateBooked, setUserDateBooked] = useState([]);
    const user = window.sessionStorage.getItem("user");

    useEffect(() => {
        if(user) {
            let userdata = [];
            fetch(`/bookings`)
                .then(res => res.json())
            .then(data => data?.map((item) => {
                if(item.employee?.name === user) {
                    userdata.push({ date: item.bookingDate, id: item.id });
                }
                setUserDateBooked(userdata);
            }));
        }
    }, [userDateBooked]);

    function handleDelete(id) {
        fetch(`/bookings/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(res => setUserDateBooked([]))
    }

    return (
        <div>
            <Nav/>
            <div className="BookingsList">
                <header>Manage Your bookings {user}</header>
                <ul className="List">
                    {userDateBooked.length === 0 ?
                        <p>Sorry {user} you currently have no bookings</p> :
                        userDateBooked.map(({date, id}) =>
                            <li className="List-item" key={id}>
                                <p>Booked on date: {date}</p>
                                <p>the id is: {id}</p>
                                <button onClick={() => handleDelete(id)}>delete</button>
                            </li>
                        )}
                </ul>
            </div>
        </div>
    );
}

export default BookingsList;