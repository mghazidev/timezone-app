import React, { useState, useEffect } from "react";

const TimeCard = () => {
    const [time, setTime] = useState("");
    const [period, setPeriod] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            const period = hours >= 12 ? "PM" : "AM";

            hours = hours % 12 || 12;
            minutes = minutes < 10 ? `0${minutes}` : minutes;

            setTime(`${hours}:${minutes}`);
            setPeriod(period);

            const options = { month: "short", day: "numeric" };
            setDate(now.toLocaleDateString("en-US", options));
        };

        updateTime(); // Update time initially
        const interval = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="flex flex-col items-start justify-center bg-gray-900 text-white w-full max-w-sm md:w-80 h-auto md:h-48 rounded-lg border border-yellow-400 shadow-lg p-4 space-y-2">
            {/* Location and Icons */}
            <div className="flex justify-between items-center w-full">
                <h3 className="text-sm font-medium truncate">Karachi, Pakistan</h3>
                <div className="flex space-x-2">
                    {/* Edit Icon */}
                    <button className="text-gray-400 hover:text-white">
                        <i className="fas fa-pencil-alt w-4 h-4"></i>
                    </button>
                    {/* Delete Icon */}
                    <button className="text-gray-400 hover:text-white">
                        <i className="fas fa-trash-alt w-4 h-4"></i>
                    </button>
                </div>
            </div>

            {/* Time and Date */}
            <div className="flex flex-col items-start space-y-1">
                <div className="flex items-baseline">
                    <span className="text-4xl font-bold">{time}</span>
                    <span className="text-2xl ml-1">{period}</span>
                </div>
                <div className="text-sm text-gray-400">GMT+5 · {date}</div>
            </div>

            {/* Slider */}
            <div className="relative w-full h-6 mt-2">
                <div className="absolute inset-0 bg-gray-700 h-1 rounded-full"></div>
                
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow cursor-pointer"></div>
                <div className="absolute flex justify-between w-full text-xs text-gray-400 mt-3">
                    <span>00</span>
                    <span>06</span>
                    <span>12</span>
                    <span>18</span>
                    <span>24</span>
                </div>
            </div>
        </div>
    );
};

export default TimeCard;
