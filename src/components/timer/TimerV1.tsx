"use client"
import { useTimer } from 'react-timer-hook';

interface DataType {
    expiryTimestamp?: any
}

const TimerV1 = ({ expiryTimestamp }: DataType) => {
    const { seconds, minutes, hours, days, } = useTimer({ expiryTimestamp, onExpire: () => console.log('Counter Expired') });

    return (
        <>
            <div className="counter-class">
                <div className="row">
                    <div className="item-list">
                        <div className="counter-item">
                            <div className="item">
                                <span className="counter-days">{days <= 9 ? `0${days}` : days}</span> Days
                            </div>
                        </div>
                        <div className="counter-item">
                            <div className="item">
                                <span className="counter-hours">{hours <= 9 ? `0${hours}` : hours}</span> Hours
                            </div>
                        </div>
                        <div className="counter-item">
                            <div className="item">
                                <span className="counter-minutes">{minutes <= 9 ? `0${minutes}` : minutes}</span> Minutes
                            </div>
                        </div>
                        <div className="counter-item">
                            <div className="item">
                                <span className="counter-seconds">{seconds <= 9 ? `0${seconds}` : seconds}</span> Seconds
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimerV1;