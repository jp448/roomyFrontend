import './Popup.css';
import BookingPicker from "./BookingPicker";

function Popup({text, closePopup, userId, user}) {

    async function handleSubmit(e) {
        e.preventDefault();
        // do update in the backend here
        fetch(`/employees/byName/${user}`)
            .then(res => res.json())
            //.then(data => console.log(JSON.stringify({ bookingDate: e.target[0].value, employee: data.id})));
            .then(data =>
                fetch(`/bookings/${userId}`, {
                    method: 'PUT',
                    body: JSON.stringify({ bookingDate: e.target[0].value, employee: data}),
                    headers: { 'Content-Type': 'application/json' },
                }).then(res => res.json()))
    }

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <h1>{text}</h1>
                <button onClick={closePopup}>X</button>
                <form onSubmit={handleSubmit}>
                    <BookingPicker />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Popup;