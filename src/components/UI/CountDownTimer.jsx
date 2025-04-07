import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex items-center justify-center space-x-4  border-blue-400 pb-2">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => {
                const key = label.toLowerCase();
                return (
                    <div key={label} className="flex flex-col items-center">
                        <span className="text-sm font-semibold">{label}</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-2xl font-bold">{timeLeft[key]}</span>
                            {idx < 3 && <span className="text-red-400 font-bold text-xl">:</span>}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CountdownTimer;
