import { useEffect, useRef, useState } from "react";
import { ExternalBorder, Buttons, Button, InternalBorder, Time, Seconds, Switch, PowerIcon, TimeIcon, TimerIcon, StartIcon, PauseIcon, InternalBorderContent, RestartIcon } from "../styles/clockStyles";

export const Clock: React.FC = () => {
    const [clockState, setClockState] = useState(false);
    const [isTimer, setIsTimer] = useState(false);
    const [time, setTime] = useState(new Date());
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef<any>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev + 10);
            }, 10);
        } 
        else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [running]);

    const switchState = () => {
        setClockState(!clockState);
        setIsTimer(false);
        setRunning(false);
        setTimer(0);
    };

    const switchMode = () => {
        setIsTimer(!isTimer);
        setRunning(false);
        setTimer(0);
    };

    const upTime = (date: Date) => {
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return hours + ":" + minutes;
    };

    const downTime = (date: Date) => {
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return seconds;
    };

    const formatTimer = (ms: number) => {
        const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
        const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
        const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
        return { minutes, seconds, centiseconds };
    };

    const { minutes, seconds, centiseconds } = formatTimer(timer);

    return (
        <ExternalBorder>
            <Switch onClick={() => switchState()}>
                <PowerIcon state={clockState} size={10} />
            </Switch>
            <InternalBorder state={clockState}>
                <InternalBorderContent disabled={!clockState}>
                <Buttons>
                    <Button disabled={!isTimer} onClick={() => {
                        setRunning(false);
                        setTimer(0);
                    }}>
                    <RestartIcon state={clockState} size={20}></RestartIcon>
                    </Button>
                    <Button disabled={!isTimer} onClick={() => setRunning(true)}>
                        <StartIcon state={clockState} size={20}></StartIcon>
                    </Button>
                    <Button disabled={!isTimer} onClick={() => setRunning(false)}>
                        <PauseIcon state={clockState} size={20}></PauseIcon>
                    </Button>
                    <Button disabled={false} onClick={() => switchMode()}>
                        {!isTimer ? (
                        <TimeIcon state={clockState} size={20}></TimeIcon>
                        ) : (
                        <TimerIcon state={clockState} size={20}></TimerIcon>
                        )}
                    </Button>
                </Buttons>
                <Time>
                    {!isTimer ? upTime(time) : `${minutes}:${seconds}`}
                </Time>
                <Seconds>
                    {!isTimer ? downTime(time) : centiseconds}
                </Seconds>
                </InternalBorderContent>
            </InternalBorder>
        </ExternalBorder>
    );
};