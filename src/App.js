import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home"
import Form from "./Form";
import BookingsList from "./BookingsList";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Hello />} />
            <Route path="/home" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bookings" element={<BookingsList />} />
        </Routes>
    </div>
  );
}

export default App;
