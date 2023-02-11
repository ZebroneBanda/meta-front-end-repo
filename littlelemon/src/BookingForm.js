import React, { useState } from "react";

export default function BookingsForm({ availableTimes, dispatch }) {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [resGuests, setResGuests] = useState("");
    const [resOccasion, setResOccasion] = useState("");
    const [resMsg, setResMsg] = useState("");

    const occasion = ["Birthday","Anniversary"];

    const handleSubmit = (e) => {
        e.preventDefault();
        setResMsg("Reservation submitted successfully!");
        setResDate("");
        setResTime("");
        setResGuests("");
        setResOccasion("");
    }
    
    return (
        <main>
            <h1 className="main-header">Booking</h1>
            <label className="resMsg">{resMsg}</label>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={resDate} onChange={e => setResDate(e.target.value)}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={resTime} onChange={e => setResTime(e.target.value)}>
                    { availableTimes.map(opt => <option>{opt}</option>) }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={resGuests} onChange={e => setResGuests(e.target.value)}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={resOccasion} onChange={e => setResOccasion(e.target.value)}>
                    { occasion.map(opt=><option>{opt}</option>) }
                </select>
                <input disabled={!resDate | !resGuests} type="submit" value="Make your reservation" />
            </form>
        </main>
    );
}