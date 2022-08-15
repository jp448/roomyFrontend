import Button from "./Button"
import "./Home.css"
import {useEffect, useState} from "react";

function Home() {
    const [user, setUser] = useState("User");

    useEffect(() => {
        setUser(window.sessionStorage.getItem("user"));
    });

    return (
        <div className="Home">
            <header className="Home-header">
                Welcome to Roomy {user}!
            </header>
            <div className="buttons">
                <div className="button-container">
                    <Button path={"form"}>Make a Booking</Button>
                </div>
                <div className="button-container">
                    <Button path={"bookings"}>Manage your Bookings</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;