import { useState } from "react";

export default function Booking() {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [resGuests, setResGuests] = useState("");
    const [resOccass, setResOccass] = useState("");
    const [resMsg, setResMsg] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        setResMsg("Reservation made successfully!");
        setResDate("");
        setResTime("");
        setResGuests("");
        setResOccass("");
    }
    
    return (
        <main>
            <h1 className="main-header">Booking</h1>
            <label className="resMsg">{resMsg}</label>
            <form onSubmit={handleSubmit}>
                <label for="res-date">Choose date</label>
                <input type="date" id="res-date" value={resDate} onChange={e => setResDate(e.target.value)}/>
                <label for="res-time">Choose time</label>
                <select id="res-time " value={resTime} onChange={e => setResTime(e.target.value)}>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label for="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={resGuests} onChange={e => setResGuests(e.target.value)}/>
                <label for="occasion">Occasion</label>
                <select id="occasion" value={resOccass} onChange={e => setResOccass(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input disabled={!resDate | !resGuests} type="submit" value="Make your reservation" />
            </form>
        </main>
    );
}