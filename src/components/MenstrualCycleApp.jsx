import React, {useState, useEffect, useCallback} from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/menstrual-cycle-app.css";
import {useParams} from "react-router-dom"
import AppKeys from "./AppKeys.jsx";
import Keys from "./Keys.jsx"


function MenstrualCycleApp() {
    const {ladyId} = useParams()
    const [cycleData, setCycleData] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/cycles12/${ladyId}`)
            .then((response) => {
                setCycleData(response.data);
            })
            .catch((error) => {
                console.error("Failed to fetch menstrual cycle data: ", error);
            });
    }, []);


    const tileClassNames = useCallback(({ date, view }) => {
        for (let i = 0; i < cycleData.length; i++) {
            const cycle = cycleData[i];
            if (date.toDateString() === new Date(cycle.nextPeriodStart).toDateString()) {
                return "next-period";
            } else if (cycle.flowDaysNum.some((day) => new Date(day).toDateString() === date.toDateString())) {
                return "flow-days";
            } else if (date.toDateString() === new Date(cycle.ovulationDate).toDateString()) {
                return "ovulation-date";
            } else if (cycle.fertilePeriods.some((day) => new Date(day).toDateString() === date.toDateString())) {
                return "fertile-periods";
            }
        }

        if (view === "month") {
            const currentDate = new Date();
            if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
                return "current-month";
            }
        }

        return null;
    }, [cycleData]);

    return (
        <>
            <div className="calendar-container">
                <Calendar
                    tileClassName={tileClassNames}
                />
            </div>
            {/*<AppKeys/>*/}
            <Keys/>
        </>
    );
}

export default MenstrualCycleApp;

