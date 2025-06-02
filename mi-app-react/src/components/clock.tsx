import { useEffect, useRef, useState } from "react";
import { ExternalBorder, Buttons, Button, InternalBorder, Time, Seconds, Switch, PowerIcon, TimeIcon, TimerIcon, StartIcon, PauseIcon, InternalBorderContent } from "../styles/clockStyles"

export const Clock: React.FC = () => {
    const [clockState, setClockState] = useState(false)
    const [isTimer, setIsTimer] = useState(false)
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
            setTimer(prev => prev + 10);
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
        setTimer(0);
    }

    const switchMode = () => {
        setIsTimer(!isTimer)
    }

    const upTime = (date: Date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return hours + ":" + minutes;
    }

    const downTime = (date: Date) => {
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return seconds;
    }

    return <>
        <ExternalBorder>
            <Switch onClick={() => switchState()}>
                <PowerIcon state={clockState} size={10} />
            </Switch>
            <InternalBorder state={clockState}>  
                <InternalBorderContent disabled={!clockState}>        
                    <Buttons>
                        <Button disabled={!isTimer}>
                            <StartIcon state={clockState} size={20}></StartIcon>
                        </Button>
                        <Button disabled={!isTimer}>
                            <PauseIcon state={clockState} size={20}></PauseIcon>
                        </Button>
                        <Button disabled={false} onClick={() => switchMode()}>{!isTimer ? (
                            <TimeIcon state={clockState} size={20}></TimeIcon>
                            ) : 
                            <TimerIcon state={clockState} size={20}></TimerIcon>}
                        </Button>
                    </Buttons>
                    <Time>{ !isTimer ? (
                        upTime(time)
                        ) : (
                        timer)
                    }</Time>
                    <Seconds>{ !isTimer ? (
                        downTime(time)
                        ) : (
                        timer)
                    }</Seconds>
                </InternalBorderContent>   
            </InternalBorder>
        </ExternalBorder>
    </>
}