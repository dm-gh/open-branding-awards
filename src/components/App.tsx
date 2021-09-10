import React, { useState, useEffect } from 'react';
import firebase from "../firebase";

export const App: React.FC = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, []);

    return (
        <div>Hello world! Time: {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
    );
};
