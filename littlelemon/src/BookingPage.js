import React, { useReducer } from "react";
import BookingForm from './BookingForm';

export default function BookingsPage() {  
    const updateTimes = (date) => {
        return availableTimes;
    }

    const initializeTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];

    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);

    return (
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    );
}